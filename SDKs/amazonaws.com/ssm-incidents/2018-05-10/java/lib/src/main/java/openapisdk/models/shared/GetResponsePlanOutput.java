package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResponsePlanOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public Action[] actions;
    public GetResponsePlanOutput withActions(Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonProperty("arn")
    public String arn;
    public GetResponsePlanOutput withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chatChannel")
    public ChatChannel chatChannel;
    public GetResponsePlanOutput withChatChannel(ChatChannel chatChannel) {
        this.chatChannel = chatChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GetResponsePlanOutput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engagements")
    public String[] engagements;
    public GetResponsePlanOutput withEngagements(String[] engagements) {
        this.engagements = engagements;
        return this;
    }
    @JsonProperty("incidentTemplate")
    public IncidentTemplate incidentTemplate;
    public GetResponsePlanOutput withIncidentTemplate(IncidentTemplate incidentTemplate) {
        this.incidentTemplate = incidentTemplate;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetResponsePlanOutput withName(String name) {
        this.name = name;
        return this;
    }
}