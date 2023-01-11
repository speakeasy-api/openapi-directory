package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IncidentTemplate
 * Basic details used in creating a response plan. The response plan is then used to create an incident record.
**/
public class IncidentTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dedupeString")
    public String dedupeString;
    public IncidentTemplate withDedupeString(String dedupeString) {
        this.dedupeString = dedupeString;
        return this;
    }
    @JsonProperty("impact")
    public Long impact;
    public IncidentTemplate withImpact(Long impact) {
        this.impact = impact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationTargets")
    public NotificationTargetItem[] notificationTargets;
    public IncidentTemplate withNotificationTargets(NotificationTargetItem[] notificationTargets) {
        this.notificationTargets = notificationTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public IncidentTemplate withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public IncidentTemplate withTitle(String title) {
        this.title = title;
        return this;
    }
}