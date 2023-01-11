package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalResponse
 * A generic Asana Resource, containing a globally unique identifier.
**/
public class GoalResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_on")
    public String dueOn;
    public GoalResponse withDueOn(String dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers")
    public UserCompact[] followers;
    public GoalResponse withFollowers(UserCompact[] followers) {
        this.followers = followers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public GoalResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_notes")
    public String htmlNotes;
    public GoalResponse withHtmlNotes(String htmlNotes) {
        this.htmlNotes = htmlNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_workspace_level")
    public Boolean isWorkspaceLevel;
    public GoalResponse withIsWorkspaceLevel(Boolean isWorkspaceLevel) {
        this.isWorkspaceLevel = isWorkspaceLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liked")
    public Boolean liked;
    public GoalResponse withLiked(Boolean liked) {
        this.liked = liked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likes")
    public Like[] likes;
    public GoalResponse withLikes(Like[] likes) {
        this.likes = likes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metric")
    public GoalResponseMetric metric;
    public GoalResponse withMetric(GoalResponseMetric metric) {
        this.metric = metric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoalResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public GoalResponse withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_likes")
    public Long numLikes;
    public GoalResponse withNumLikes(Long numLikes) {
        this.numLikes = numLikes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public GoalResponseOwner owner;
    public GoalResponse withOwner(GoalResponseOwner owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public GoalResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_on")
    public String startOn;
    public GoalResponse withStartOn(String startOn) {
        this.startOn = startOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GoalResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public GoalResponseTeam team;
    public GoalResponse withTeam(GoalResponseTeam team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_period")
    public GoalResponseTimePeriod timePeriod;
    public GoalResponse withTimePeriod(GoalResponseTimePeriod timePeriod) {
        this.timePeriod = timePeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public GoalResponseWorkspace workspace;
    public GoalResponse withWorkspace(GoalResponseWorkspace workspace) {
        this.workspace = workspace;
        return this;
    }
}