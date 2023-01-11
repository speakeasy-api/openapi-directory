package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCampaignRequestBodyWriteCampaignRequest
 * Specifies the configuration and other settings for a campaign.
**/
public class UpdateCampaignRequestBodyWriteCampaignRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalTreatments")
    public openapisdk.models.shared.WriteTreatmentResource[] additionalTreatments;
    public UpdateCampaignRequestBodyWriteCampaignRequest withAdditionalTreatments(openapisdk.models.shared.WriteTreatmentResource[] additionalTreatments) {
        this.additionalTreatments = additionalTreatments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomDeliveryConfiguration")
    public openapisdk.models.shared.CustomDeliveryConfiguration customDeliveryConfiguration;
    public UpdateCampaignRequestBodyWriteCampaignRequest withCustomDeliveryConfiguration(openapisdk.models.shared.CustomDeliveryConfiguration customDeliveryConfiguration) {
        this.customDeliveryConfiguration = customDeliveryConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateCampaignRequestBodyWriteCampaignRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HoldoutPercent")
    public Long holdoutPercent;
    public UpdateCampaignRequestBodyWriteCampaignRequest withHoldoutPercent(Long holdoutPercent) {
        this.holdoutPercent = holdoutPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hook")
    public openapisdk.models.shared.CampaignHook hook;
    public UpdateCampaignRequestBodyWriteCampaignRequest withHook(openapisdk.models.shared.CampaignHook hook) {
        this.hook = hook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsPaused")
    public Boolean isPaused;
    public UpdateCampaignRequestBodyWriteCampaignRequest withIsPaused(Boolean isPaused) {
        this.isPaused = isPaused;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limits")
    public openapisdk.models.shared.CampaignLimits limits;
    public UpdateCampaignRequestBodyWriteCampaignRequest withLimits(openapisdk.models.shared.CampaignLimits limits) {
        this.limits = limits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageConfiguration")
    public openapisdk.models.shared.MessageConfiguration messageConfiguration;
    public UpdateCampaignRequestBodyWriteCampaignRequest withMessageConfiguration(openapisdk.models.shared.MessageConfiguration messageConfiguration) {
        this.messageConfiguration = messageConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateCampaignRequestBodyWriteCampaignRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Priority")
    public Long priority;
    public UpdateCampaignRequestBodyWriteCampaignRequest withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public openapisdk.models.shared.Schedule schedule;
    public UpdateCampaignRequestBodyWriteCampaignRequest withSchedule(openapisdk.models.shared.Schedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentId")
    public String segmentId;
    public UpdateCampaignRequestBodyWriteCampaignRequest withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentVersion")
    public Long segmentVersion;
    public UpdateCampaignRequestBodyWriteCampaignRequest withSegmentVersion(Long segmentVersion) {
        this.segmentVersion = segmentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateConfiguration")
    public openapisdk.models.shared.TemplateConfiguration templateConfiguration;
    public UpdateCampaignRequestBodyWriteCampaignRequest withTemplateConfiguration(openapisdk.models.shared.TemplateConfiguration templateConfiguration) {
        this.templateConfiguration = templateConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TreatmentDescription")
    public String treatmentDescription;
    public UpdateCampaignRequestBodyWriteCampaignRequest withTreatmentDescription(String treatmentDescription) {
        this.treatmentDescription = treatmentDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TreatmentName")
    public String treatmentName;
    public UpdateCampaignRequestBodyWriteCampaignRequest withTreatmentName(String treatmentName) {
        this.treatmentName = treatmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public UpdateCampaignRequestBodyWriteCampaignRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}