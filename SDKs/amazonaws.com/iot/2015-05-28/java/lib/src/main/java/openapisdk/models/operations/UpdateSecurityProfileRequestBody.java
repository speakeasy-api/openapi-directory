package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSecurityProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalMetricsToRetain")
    public String[] additionalMetricsToRetain;
    public UpdateSecurityProfileRequestBody withAdditionalMetricsToRetain(String[] additionalMetricsToRetain) {
        this.additionalMetricsToRetain = additionalMetricsToRetain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalMetricsToRetainV2")
    public openapisdk.models.shared.MetricToRetain[] additionalMetricsToRetainV2;
    public UpdateSecurityProfileRequestBody withAdditionalMetricsToRetainV2(openapisdk.models.shared.MetricToRetain[] additionalMetricsToRetainV2) {
        this.additionalMetricsToRetainV2 = additionalMetricsToRetainV2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertTargets")
    public java.util.Map<String, openapisdk.models.shared.AlertTarget> alertTargets;
    public UpdateSecurityProfileRequestBody withAlertTargets(java.util.Map<String, openapisdk.models.shared.AlertTarget> alertTargets) {
        this.alertTargets = alertTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("behaviors")
    public openapisdk.models.shared.Behavior[] behaviors;
    public UpdateSecurityProfileRequestBody withBehaviors(openapisdk.models.shared.Behavior[] behaviors) {
        this.behaviors = behaviors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteAdditionalMetricsToRetain")
    public Boolean deleteAdditionalMetricsToRetain;
    public UpdateSecurityProfileRequestBody withDeleteAdditionalMetricsToRetain(Boolean deleteAdditionalMetricsToRetain) {
        this.deleteAdditionalMetricsToRetain = deleteAdditionalMetricsToRetain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteAlertTargets")
    public Boolean deleteAlertTargets;
    public UpdateSecurityProfileRequestBody withDeleteAlertTargets(Boolean deleteAlertTargets) {
        this.deleteAlertTargets = deleteAlertTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteBehaviors")
    public Boolean deleteBehaviors;
    public UpdateSecurityProfileRequestBody withDeleteBehaviors(Boolean deleteBehaviors) {
        this.deleteBehaviors = deleteBehaviors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileDescription")
    public String securityProfileDescription;
    public UpdateSecurityProfileRequestBody withSecurityProfileDescription(String securityProfileDescription) {
        this.securityProfileDescription = securityProfileDescription;
        return this;
    }
}