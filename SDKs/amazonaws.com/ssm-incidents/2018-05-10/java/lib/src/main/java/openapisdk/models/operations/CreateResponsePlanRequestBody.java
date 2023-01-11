package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateResponsePlanRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public openapisdk.models.shared.Action[] actions;
    public CreateResponsePlanRequestBody withActions(openapisdk.models.shared.Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chatChannel")
    public CreateResponsePlanRequestBodyChatChannel chatChannel;
    public CreateResponsePlanRequestBody withChatChannel(CreateResponsePlanRequestBodyChatChannel chatChannel) {
        this.chatChannel = chatChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateResponsePlanRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CreateResponsePlanRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engagements")
    public String[] engagements;
    public CreateResponsePlanRequestBody withEngagements(String[] engagements) {
        this.engagements = engagements;
        return this;
    }
    @JsonProperty("incidentTemplate")
    public CreateResponsePlanRequestBodyIncidentTemplate incidentTemplate;
    public CreateResponsePlanRequestBody withIncidentTemplate(CreateResponsePlanRequestBodyIncidentTemplate incidentTemplate) {
        this.incidentTemplate = incidentTemplate;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateResponsePlanRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateResponsePlanRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}