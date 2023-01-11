package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formDetails")
    public java.util.Map<String, Object>[] formDetails;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData withFormDetails(java.util.Map<String, Object>[] formDetails) {
        this.formDetails = formDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources[] resources;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData withResources(WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share")
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare[] share;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData withShare(WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare[] share) {
        this.share = share;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferStatus")
    public String transferStatus;
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData withTransferStatus(String transferStatus) {
        this.transferStatus = transferStatus;
        return this;
    }
}