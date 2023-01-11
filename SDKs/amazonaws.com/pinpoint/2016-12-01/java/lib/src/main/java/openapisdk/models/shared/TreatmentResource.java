package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TreatmentResource
 * Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.
**/
public class TreatmentResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomDeliveryConfiguration")
    public CustomDeliveryConfiguration customDeliveryConfiguration;
    public TreatmentResource withCustomDeliveryConfiguration(CustomDeliveryConfiguration customDeliveryConfiguration) {
        this.customDeliveryConfiguration = customDeliveryConfiguration;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public TreatmentResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageConfiguration")
    public MessageConfiguration messageConfiguration;
    public TreatmentResource withMessageConfiguration(MessageConfiguration messageConfiguration) {
        this.messageConfiguration = messageConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public Schedule schedule;
    public TreatmentResource withSchedule(Schedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonProperty("SizePercent")
    public Long sizePercent;
    public TreatmentResource withSizePercent(Long sizePercent) {
        this.sizePercent = sizePercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public CampaignState state;
    public TreatmentResource withState(CampaignState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateConfiguration")
    public TemplateConfiguration templateConfiguration;
    public TreatmentResource withTemplateConfiguration(TemplateConfiguration templateConfiguration) {
        this.templateConfiguration = templateConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TreatmentDescription")
    public String treatmentDescription;
    public TreatmentResource withTreatmentDescription(String treatmentDescription) {
        this.treatmentDescription = treatmentDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TreatmentName")
    public String treatmentName;
    public TreatmentResource withTreatmentName(String treatmentName) {
        this.treatmentName = treatmentName;
        return this;
    }
}