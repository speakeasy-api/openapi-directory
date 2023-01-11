package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InternationalReturnOverrideType
 * This type defines the fields for a seller's international return policy. If a seller does not populate the fields in this complex type, the international return policy defaults to the return policy set for domestic returns.
**/
public class InternationalReturnOverrideType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnMethod")
    public String returnMethod;
    public InternationalReturnOverrideType withReturnMethod(String returnMethod) {
        this.returnMethod = returnMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnPeriod")
    public TimeDuration returnPeriod;
    public InternationalReturnOverrideType withReturnPeriod(TimeDuration returnPeriod) {
        this.returnPeriod = returnPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnShippingCostPayer")
    public String returnShippingCostPayer;
    public InternationalReturnOverrideType withReturnShippingCostPayer(String returnShippingCostPayer) {
        this.returnShippingCostPayer = returnShippingCostPayer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnsAccepted")
    public Boolean returnsAccepted;
    public InternationalReturnOverrideType withReturnsAccepted(Boolean returnsAccepted) {
        this.returnsAccepted = returnsAccepted;
        return this;
    }
}