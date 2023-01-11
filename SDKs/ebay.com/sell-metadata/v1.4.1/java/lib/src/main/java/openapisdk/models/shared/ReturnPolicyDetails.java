package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReturnPolicyDetails
 * This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).
**/
public class ReturnPolicyDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyDescriptionEnabled")
    public Boolean policyDescriptionEnabled;
    public ReturnPolicyDetails withPolicyDescriptionEnabled(Boolean policyDescriptionEnabled) {
        this.policyDescriptionEnabled = policyDescriptionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundMethods")
    public String[] refundMethods;
    public ReturnPolicyDetails withRefundMethods(String[] refundMethods) {
        this.refundMethods = refundMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnMethods")
    public String[] returnMethods;
    public ReturnPolicyDetails withReturnMethods(String[] returnMethods) {
        this.returnMethods = returnMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnPeriods")
    public TimeDuration[] returnPeriods;
    public ReturnPolicyDetails withReturnPeriods(TimeDuration[] returnPeriods) {
        this.returnPeriods = returnPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnShippingCostPayers")
    public String[] returnShippingCostPayers;
    public ReturnPolicyDetails withReturnShippingCostPayers(String[] returnShippingCostPayers) {
        this.returnShippingCostPayers = returnShippingCostPayers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnsAcceptanceEnabled")
    public Boolean returnsAcceptanceEnabled;
    public ReturnPolicyDetails withReturnsAcceptanceEnabled(Boolean returnsAcceptanceEnabled) {
        this.returnsAcceptanceEnabled = returnsAcceptanceEnabled;
        return this;
    }
}