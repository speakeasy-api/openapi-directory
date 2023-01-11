package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricValue
 * The value to be compared with the <code>metric</code>.
**/
public class MetricValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidrs")
    public String[] cidrs;
    public MetricValue withCidrs(String[] cidrs) {
        this.cidrs = cidrs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public MetricValue withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public Double number;
    public MetricValue withNumber(Double number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numbers")
    public Double[] numbers;
    public MetricValue withNumbers(Double[] numbers) {
        this.numbers = numbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports")
    public Long[] ports;
    public MetricValue withPorts(Long[] ports) {
        this.ports = ports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strings")
    public String[] strings;
    public MetricValue withStrings(String[] strings) {
        this.strings = strings;
        return this;
    }
}