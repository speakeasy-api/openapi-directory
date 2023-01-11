package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAccountResponse
 * A list of details about the email-sending capabilities of your Amazon SES account in the current AWS Region.
**/
public class GetAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedIpAutoWarmupEnabled")
    public Boolean dedicatedIpAutoWarmupEnabled;
    public GetAccountResponse withDedicatedIpAutoWarmupEnabled(Boolean dedicatedIpAutoWarmupEnabled) {
        this.dedicatedIpAutoWarmupEnabled = dedicatedIpAutoWarmupEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Details")
    public AccountDetails details;
    public GetAccountResponse withDetails(AccountDetails details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnforcementStatus")
    public String enforcementStatus;
    public GetAccountResponse withEnforcementStatus(String enforcementStatus) {
        this.enforcementStatus = enforcementStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductionAccessEnabled")
    public Boolean productionAccessEnabled;
    public GetAccountResponse withProductionAccessEnabled(Boolean productionAccessEnabled) {
        this.productionAccessEnabled = productionAccessEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SendQuota")
    public SendQuota sendQuota;
    public GetAccountResponse withSendQuota(SendQuota sendQuota) {
        this.sendQuota = sendQuota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SendingEnabled")
    public Boolean sendingEnabled;
    public GetAccountResponse withSendingEnabled(Boolean sendingEnabled) {
        this.sendingEnabled = sendingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuppressionAttributes")
    public SuppressionAttributes suppressionAttributes;
    public GetAccountResponse withSuppressionAttributes(SuppressionAttributes suppressionAttributes) {
        this.suppressionAttributes = suppressionAttributes;
        return this;
    }
}