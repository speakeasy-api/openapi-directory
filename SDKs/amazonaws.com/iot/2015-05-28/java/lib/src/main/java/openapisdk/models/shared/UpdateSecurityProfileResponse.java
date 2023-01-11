package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateSecurityProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalMetricsToRetain")
    public java.util.Map<String, Object> additionalMetricsToRetain;
    public UpdateSecurityProfileResponse withAdditionalMetricsToRetain(java.util.Map<String, Object> additionalMetricsToRetain) {
        this.additionalMetricsToRetain = additionalMetricsToRetain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalMetricsToRetainV2")
    public MetricToRetain[] additionalMetricsToRetainV2;
    public UpdateSecurityProfileResponse withAdditionalMetricsToRetainV2(MetricToRetain[] additionalMetricsToRetainV2) {
        this.additionalMetricsToRetainV2 = additionalMetricsToRetainV2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertTargets")
    public java.util.Map<String, AlertTarget> alertTargets;
    public UpdateSecurityProfileResponse withAlertTargets(java.util.Map<String, AlertTarget> alertTargets) {
        this.alertTargets = alertTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("behaviors")
    public Behavior[] behaviors;
    public UpdateSecurityProfileResponse withBehaviors(Behavior[] behaviors) {
        this.behaviors = behaviors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public UpdateSecurityProfileResponse withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public UpdateSecurityProfileResponse withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileArn")
    public String securityProfileArn;
    public UpdateSecurityProfileResponse withSecurityProfileArn(String securityProfileArn) {
        this.securityProfileArn = securityProfileArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileDescription")
    public String securityProfileDescription;
    public UpdateSecurityProfileResponse withSecurityProfileDescription(String securityProfileDescription) {
        this.securityProfileDescription = securityProfileDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileName")
    public String securityProfileName;
    public UpdateSecurityProfileResponse withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public UpdateSecurityProfileResponse withVersion(Long version) {
        this.version = version;
        return this;
    }
}