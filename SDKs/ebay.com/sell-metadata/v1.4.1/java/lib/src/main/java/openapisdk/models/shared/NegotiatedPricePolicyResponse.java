package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NegotiatedPricePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negotiatedPricePolicies")
    public NegotiatedPricePolicy[] negotiatedPricePolicies;
    public NegotiatedPricePolicyResponse withNegotiatedPricePolicies(NegotiatedPricePolicy[] negotiatedPricePolicies) {
        this.negotiatedPricePolicies = negotiatedPricePolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public NegotiatedPricePolicyResponse withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}