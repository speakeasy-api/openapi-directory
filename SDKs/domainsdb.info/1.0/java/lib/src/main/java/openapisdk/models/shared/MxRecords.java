package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MxRecords {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchange")
    public String exchange;
    public MxRecords withExchange(String exchange) {
        this.exchange = exchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public MxRecords withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
}