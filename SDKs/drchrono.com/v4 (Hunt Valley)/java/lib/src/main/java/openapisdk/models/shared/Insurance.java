package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Insurance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payer_id")
    public String payerId;
    public Insurance withPayerId(String payerId) {
        this.payerId = payerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payer_name")
    public String payerName;
    public Insurance withPayerName(String payerName) {
        this.payerName = payerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public Insurance withState(String state) {
        this.state = state;
        return this;
    }
}