package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConfigurationSetRequestBody {
    @JsonProperty("ConfigurationSetName")
    public String configurationSetName;
    public CreateConfigurationSetRequestBody withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryOptions")
    public CreateConfigurationSetRequestBodyDeliveryOptions deliveryOptions;
    public CreateConfigurationSetRequestBody withDeliveryOptions(CreateConfigurationSetRequestBodyDeliveryOptions deliveryOptions) {
        this.deliveryOptions = deliveryOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReputationOptions")
    public CreateConfigurationSetRequestBodyReputationOptions reputationOptions;
    public CreateConfigurationSetRequestBody withReputationOptions(CreateConfigurationSetRequestBodyReputationOptions reputationOptions) {
        this.reputationOptions = reputationOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SendingOptions")
    public CreateConfigurationSetRequestBodySendingOptions sendingOptions;
    public CreateConfigurationSetRequestBody withSendingOptions(CreateConfigurationSetRequestBodySendingOptions sendingOptions) {
        this.sendingOptions = sendingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuppressionOptions")
    public CreateConfigurationSetRequestBodySuppressionOptions suppressionOptions;
    public CreateConfigurationSetRequestBody withSuppressionOptions(CreateConfigurationSetRequestBodySuppressionOptions suppressionOptions) {
        this.suppressionOptions = suppressionOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateConfigurationSetRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrackingOptions")
    public CreateConfigurationSetRequestBodyTrackingOptions trackingOptions;
    public CreateConfigurationSetRequestBody withTrackingOptions(CreateConfigurationSetRequestBodyTrackingOptions trackingOptions) {
        this.trackingOptions = trackingOptions;
        return this;
    }
}