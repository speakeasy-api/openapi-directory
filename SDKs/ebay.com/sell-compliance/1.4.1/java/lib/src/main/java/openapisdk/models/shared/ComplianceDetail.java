package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComplianceDetail
 * This type is used by each listing violation that is returned under the violations container.
**/
public class ComplianceDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceState")
    public String complianceState;
    public ComplianceDetail withComplianceState(String complianceState) {
        this.complianceState = complianceState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("correctiveRecommendations")
    public CorrectiveRecommendations correctiveRecommendations;
    public ComplianceDetail withCorrectiveRecommendations(CorrectiveRecommendations correctiveRecommendations) {
        this.correctiveRecommendations = correctiveRecommendations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ComplianceDetail withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonCode")
    public String reasonCode;
    public ComplianceDetail withReasonCode(String reasonCode) {
        this.reasonCode = reasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variation")
    public VariationDetails variation;
    public ComplianceDetail withVariation(VariationDetails variation) {
        this.variation = variation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationData")
    public NameValueList[] violationData;
    public ComplianceDetail withViolationData(NameValueList[] violationData) {
        this.violationData = violationData;
        return this;
    }
}