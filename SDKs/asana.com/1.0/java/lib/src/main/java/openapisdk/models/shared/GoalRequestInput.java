package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalRequestInput
 * A generic Asana Resource, containing a globally unique identifier.
**/
public class GoalRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_on")
    public String dueOn;
    public GoalRequestInput withDueOn(String dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers")
    public UserCompactInput[] followers;
    public GoalRequestInput withFollowers(UserCompactInput[] followers) {
        this.followers = followers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_notes")
    public String htmlNotes;
    public GoalRequestInput withHtmlNotes(String htmlNotes) {
        this.htmlNotes = htmlNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_workspace_level")
    public Boolean isWorkspaceLevel;
    public GoalRequestInput withIsWorkspaceLevel(Boolean isWorkspaceLevel) {
        this.isWorkspaceLevel = isWorkspaceLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liked")
    public Boolean liked;
    public GoalRequestInput withLiked(Boolean liked) {
        this.liked = liked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metric")
    public GoalRequestMetricInput metric;
    public GoalRequestInput withMetric(GoalRequestMetricInput metric) {
        this.metric = metric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoalRequestInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public GoalRequestInput withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public GoalRequestOwnerInput owner;
    public GoalRequestInput withOwner(GoalRequestOwnerInput owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_on")
    public String startOn;
    public GoalRequestInput withStartOn(String startOn) {
        this.startOn = startOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GoalRequestInput withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public GoalRequestTeamInput team;
    public GoalRequestInput withTeam(GoalRequestTeamInput team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_period")
    public GoalRequestTimePeriodInput timePeriod;
    public GoalRequestInput withTimePeriod(GoalRequestTimePeriodInput timePeriod) {
        this.timePeriod = timePeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public GoalRequestWorkspaceInput workspace;
    public GoalRequestInput withWorkspace(GoalRequestWorkspaceInput workspace) {
        this.workspace = workspace;
        return this;
    }
}