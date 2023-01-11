package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateResponsePlanRequestBodyIncidentTemplate
 * Basic details used in creating a response plan. The response plan is then used to create an incident record.
**/
public class CreateResponsePlanRequestBodyIncidentTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dedupeString")
    public String dedupeString;
    public CreateResponsePlanRequestBodyIncidentTemplate withDedupeString(String dedupeString) {
        this.dedupeString = dedupeString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impact")
    public Long impact;
    public CreateResponsePlanRequestBodyIncidentTemplate withImpact(Long impact) {
        this.impact = impact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationTargets")
    public openapisdk.models.shared.NotificationTargetItem[] notificationTargets;
    public CreateResponsePlanRequestBodyIncidentTemplate withNotificationTargets(openapisdk.models.shared.NotificationTargetItem[] notificationTargets) {
        this.notificationTargets = notificationTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public CreateResponsePlanRequestBodyIncidentTemplate withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CreateResponsePlanRequestBodyIncidentTemplate withTitle(String title) {
        this.title = title;
        return this;
    }
}