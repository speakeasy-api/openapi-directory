package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendUsersMessagesRequestBodySendUsersMessageRequest
 * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
**/
public class SendUsersMessagesRequestBodySendUsersMessageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Context")
    public java.util.Map<String, String> context;
    public SendUsersMessagesRequestBodySendUsersMessageRequest withContext(java.util.Map<String, String> context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageConfiguration")
    public openapisdk.models.shared.DirectMessageConfiguration messageConfiguration;
    public SendUsersMessagesRequestBodySendUsersMessageRequest withMessageConfiguration(openapisdk.models.shared.DirectMessageConfiguration messageConfiguration) {
        this.messageConfiguration = messageConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateConfiguration")
    public openapisdk.models.shared.TemplateConfiguration templateConfiguration;
    public SendUsersMessagesRequestBodySendUsersMessageRequest withTemplateConfiguration(openapisdk.models.shared.TemplateConfiguration templateConfiguration) {
        this.templateConfiguration = templateConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TraceId")
    public String traceId;
    public SendUsersMessagesRequestBodySendUsersMessageRequest withTraceId(String traceId) {
        this.traceId = traceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Users")
    public java.util.Map<String, openapisdk.models.shared.EndpointSendConfiguration> users;
    public SendUsersMessagesRequestBodySendUsersMessageRequest withUsers(java.util.Map<String, openapisdk.models.shared.EndpointSendConfiguration> users) {
        this.users = users;
        return this;
    }
}