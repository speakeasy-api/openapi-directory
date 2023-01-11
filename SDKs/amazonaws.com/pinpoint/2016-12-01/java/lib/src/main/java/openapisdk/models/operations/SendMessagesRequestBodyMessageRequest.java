package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendMessagesRequestBodyMessageRequest
 * Specifies the configuration and other settings for a message.
**/
public class SendMessagesRequestBodyMessageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Addresses")
    public java.util.Map<String, openapisdk.models.shared.AddressConfiguration> addresses;
    public SendMessagesRequestBodyMessageRequest withAddresses(java.util.Map<String, openapisdk.models.shared.AddressConfiguration> addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Context")
    public java.util.Map<String, String> context;
    public SendMessagesRequestBodyMessageRequest withContext(java.util.Map<String, String> context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Endpoints")
    public java.util.Map<String, openapisdk.models.shared.EndpointSendConfiguration> endpoints;
    public SendMessagesRequestBodyMessageRequest withEndpoints(java.util.Map<String, openapisdk.models.shared.EndpointSendConfiguration> endpoints) {
        this.endpoints = endpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageConfiguration")
    public openapisdk.models.shared.DirectMessageConfiguration messageConfiguration;
    public SendMessagesRequestBodyMessageRequest withMessageConfiguration(openapisdk.models.shared.DirectMessageConfiguration messageConfiguration) {
        this.messageConfiguration = messageConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateConfiguration")
    public openapisdk.models.shared.TemplateConfiguration templateConfiguration;
    public SendMessagesRequestBodyMessageRequest withTemplateConfiguration(openapisdk.models.shared.TemplateConfiguration templateConfiguration) {
        this.templateConfiguration = templateConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TraceId")
    public String traceId;
    public SendMessagesRequestBodyMessageRequest withTraceId(String traceId) {
        this.traceId = traceId;
        return this;
    }
}