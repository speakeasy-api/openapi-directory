package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomMessageActivity
 * The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.
**/
public class CustomMessageActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryUri")
    public String deliveryUri;
    public CustomMessageActivity withDeliveryUri(String deliveryUri) {
        this.deliveryUri = deliveryUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointTypes")
    public EndpointTypesElementEnum[] endpointTypes;
    public CustomMessageActivity withEndpointTypes(EndpointTypesElementEnum[] endpointTypes) {
        this.endpointTypes = endpointTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageConfig")
    public JourneyCustomMessage messageConfig;
    public CustomMessageActivity withMessageConfig(JourneyCustomMessage messageConfig) {
        this.messageConfig = messageConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextActivity")
    public String nextActivity;
    public CustomMessageActivity withNextActivity(String nextActivity) {
        this.nextActivity = nextActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateName")
    public String templateName;
    public CustomMessageActivity withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateVersion")
    public String templateVersion;
    public CustomMessageActivity withTemplateVersion(String templateVersion) {
        this.templateVersion = templateVersion;
        return this;
    }
}