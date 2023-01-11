package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AttributeValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("N")
    public Double n;
    public AttributeValue withN(Double n) {
        this.n = n;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S")
    public String s;
    public AttributeValue withS(String s) {
        this.s = s;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SDM")
    public java.util.Map<String, Double> sdm;
    public AttributeValue withSdm(java.util.Map<String, Double> sdm) {
        this.sdm = sdm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SL")
    public String[] sl;
    public AttributeValue withSl(String[] sl) {
        this.sl = sl;
        return this;
    }
}