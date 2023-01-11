package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSecurityProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalMetricsToRetain")
    public String[] additionalMetricsToRetain;
    public CreateSecurityProfileRequestBody withAdditionalMetricsToRetain(String[] additionalMetricsToRetain) {
        this.additionalMetricsToRetain = additionalMetricsToRetain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalMetricsToRetainV2")
    public openapisdk.models.shared.MetricToRetain[] additionalMetricsToRetainV2;
    public CreateSecurityProfileRequestBody withAdditionalMetricsToRetainV2(openapisdk.models.shared.MetricToRetain[] additionalMetricsToRetainV2) {
        this.additionalMetricsToRetainV2 = additionalMetricsToRetainV2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertTargets")
    public java.util.Map<String, openapisdk.models.shared.AlertTarget> alertTargets;
    public CreateSecurityProfileRequestBody withAlertTargets(java.util.Map<String, openapisdk.models.shared.AlertTarget> alertTargets) {
        this.alertTargets = alertTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("behaviors")
    public openapisdk.models.shared.Behavior[] behaviors;
    public CreateSecurityProfileRequestBody withBehaviors(openapisdk.models.shared.Behavior[] behaviors) {
        this.behaviors = behaviors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileDescription")
    public String securityProfileDescription;
    public CreateSecurityProfileRequestBody withSecurityProfileDescription(String securityProfileDescription) {
        this.securityProfileDescription = securityProfileDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateSecurityProfileRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}