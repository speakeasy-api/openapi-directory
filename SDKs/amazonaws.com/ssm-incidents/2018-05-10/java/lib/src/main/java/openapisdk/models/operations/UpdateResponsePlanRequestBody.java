package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateResponsePlanRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public openapisdk.models.shared.Action[] actions;
    public UpdateResponsePlanRequestBody withActions(openapisdk.models.shared.Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonProperty("arn")
    public String arn;
    public UpdateResponsePlanRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chatChannel")
    public UpdateResponsePlanRequestBodyChatChannel chatChannel;
    public UpdateResponsePlanRequestBody withChatChannel(UpdateResponsePlanRequestBodyChatChannel chatChannel) {
        this.chatChannel = chatChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateResponsePlanRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public UpdateResponsePlanRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engagements")
    public String[] engagements;
    public UpdateResponsePlanRequestBody withEngagements(String[] engagements) {
        this.engagements = engagements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incidentTemplateDedupeString")
    public String incidentTemplateDedupeString;
    public UpdateResponsePlanRequestBody withIncidentTemplateDedupeString(String incidentTemplateDedupeString) {
        this.incidentTemplateDedupeString = incidentTemplateDedupeString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incidentTemplateImpact")
    public Long incidentTemplateImpact;
    public UpdateResponsePlanRequestBody withIncidentTemplateImpact(Long incidentTemplateImpact) {
        this.incidentTemplateImpact = incidentTemplateImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incidentTemplateNotificationTargets")
    public openapisdk.models.shared.NotificationTargetItem[] incidentTemplateNotificationTargets;
    public UpdateResponsePlanRequestBody withIncidentTemplateNotificationTargets(openapisdk.models.shared.NotificationTargetItem[] incidentTemplateNotificationTargets) {
        this.incidentTemplateNotificationTargets = incidentTemplateNotificationTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incidentTemplateSummary")
    public String incidentTemplateSummary;
    public UpdateResponsePlanRequestBody withIncidentTemplateSummary(String incidentTemplateSummary) {
        this.incidentTemplateSummary = incidentTemplateSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incidentTemplateTitle")
    public String incidentTemplateTitle;
    public UpdateResponsePlanRequestBody withIncidentTemplateTitle(String incidentTemplateTitle) {
        this.incidentTemplateTitle = incidentTemplateTitle;
        return this;
    }
}