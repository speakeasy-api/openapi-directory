package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCampaignRequestBodyWriteCampaignRequest
 * Specifies the configuration and other settings for a campaign.
**/
public class CreateCampaignRequestBodyWriteCampaignRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalTreatments")
    public openapisdk.models.shared.WriteTreatmentResource[] additionalTreatments;
    public CreateCampaignRequestBodyWriteCampaignRequest withAdditionalTreatments(openapisdk.models.shared.WriteTreatmentResource[] additionalTreatments) {
        this.additionalTreatments = additionalTreatments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomDeliveryConfiguration")
    public openapisdk.models.shared.CustomDeliveryConfiguration customDeliveryConfiguration;
    public CreateCampaignRequestBodyWriteCampaignRequest withCustomDeliveryConfiguration(openapisdk.models.shared.CustomDeliveryConfiguration customDeliveryConfiguration) {
        this.customDeliveryConfiguration = customDeliveryConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateCampaignRequestBodyWriteCampaignRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HoldoutPercent")
    public Long holdoutPercent;
    public CreateCampaignRequestBodyWriteCampaignRequest withHoldoutPercent(Long holdoutPercent) {
        this.holdoutPercent = holdoutPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hook")
    public openapisdk.models.shared.CampaignHook hook;
    public CreateCampaignRequestBodyWriteCampaignRequest withHook(openapisdk.models.shared.CampaignHook hook) {
        this.hook = hook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsPaused")
    public Boolean isPaused;
    public CreateCampaignRequestBodyWriteCampaignRequest withIsPaused(Boolean isPaused) {
        this.isPaused = isPaused;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limits")
    public openapisdk.models.shared.CampaignLimits limits;
    public CreateCampaignRequestBodyWriteCampaignRequest withLimits(openapisdk.models.shared.CampaignLimits limits) {
        this.limits = limits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageConfiguration")
    public openapisdk.models.shared.MessageConfiguration messageConfiguration;
    public CreateCampaignRequestBodyWriteCampaignRequest withMessageConfiguration(openapisdk.models.shared.MessageConfiguration messageConfiguration) {
        this.messageConfiguration = messageConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateCampaignRequestBodyWriteCampaignRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Priority")
    public Long priority;
    public CreateCampaignRequestBodyWriteCampaignRequest withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public openapisdk.models.shared.Schedule schedule;
    public CreateCampaignRequestBodyWriteCampaignRequest withSchedule(openapisdk.models.shared.Schedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentId")
    public String segmentId;
    public CreateCampaignRequestBodyWriteCampaignRequest withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentVersion")
    public Long segmentVersion;
    public CreateCampaignRequestBodyWriteCampaignRequest withSegmentVersion(Long segmentVersion) {
        this.segmentVersion = segmentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateConfiguration")
    public openapisdk.models.shared.TemplateConfiguration templateConfiguration;
    public CreateCampaignRequestBodyWriteCampaignRequest withTemplateConfiguration(openapisdk.models.shared.TemplateConfiguration templateConfiguration) {
        this.templateConfiguration = templateConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TreatmentDescription")
    public String treatmentDescription;
    public CreateCampaignRequestBodyWriteCampaignRequest withTreatmentDescription(String treatmentDescription) {
        this.treatmentDescription = treatmentDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TreatmentName")
    public String treatmentName;
    public CreateCampaignRequestBodyWriteCampaignRequest withTreatmentName(String treatmentName) {
        this.treatmentName = treatmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateCampaignRequestBodyWriteCampaignRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}