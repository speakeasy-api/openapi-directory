package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskRequestInput
 * The *task* is the basic object around which many operations in Asana are centered.
**/
public class TaskRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_status")
    public TaskRequestApprovalStatusEnum approvalStatus;
    public TaskRequestInput withApprovalStatus(TaskRequestApprovalStatusEnum approvalStatus) {
        this.approvalStatus = approvalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public String assignee;
    public TaskRequestInput withAssignee(String assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee_section")
    public String assigneeSection;
    public TaskRequestInput withAssigneeSection(String assigneeSection) {
        this.assigneeSection = assigneeSection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee_status")
    public TaskRequestAssigneeStatusEnum assigneeStatus;
    public TaskRequestInput withAssigneeStatus(TaskRequestAssigneeStatusEnum assigneeStatus) {
        this.assigneeStatus = assigneeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completed")
    public Boolean completed;
    public TaskRequestInput withCompleted(Boolean completed) {
        this.completed = completed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completed_by")
    public UserCompactInput completedBy;
    public TaskRequestInput withCompletedBy(UserCompactInput completedBy) {
        this.completedBy = completedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, String> customFields;
    public TaskRequestInput withCustomFields(java.util.Map<String, String> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_at")
    public LocalDate dueAt;
    public TaskRequestInput withDueAt(LocalDate dueAt) {
        this.dueAt = dueAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_on")
    public LocalDate dueOn;
    public TaskRequestInput withDueOn(LocalDate dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external")
    public TaskRequestExternal external;
    public TaskRequestInput withExternal(TaskRequestExternal external) {
        this.external = external;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers")
    public String[] followers;
    public TaskRequestInput withFollowers(String[] followers) {
        this.followers = followers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_notes")
    public String htmlNotes;
    public TaskRequestInput withHtmlNotes(String htmlNotes) {
        this.htmlNotes = htmlNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liked")
    public Boolean liked;
    public TaskRequestInput withLiked(Boolean liked) {
        this.liked = liked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TaskRequestInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public TaskRequestInput withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public TaskRequestInput withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projects")
    public String[] projects;
    public TaskRequestInput withProjects(String[] projects) {
        this.projects = projects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_subtype")
    public TaskRequestResourceSubtypeEnum resourceSubtype;
    public TaskRequestInput withResourceSubtype(TaskRequestResourceSubtypeEnum resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_on")
    public LocalDate startOn;
    public TaskRequestInput withStartOn(LocalDate startOn) {
        this.startOn = startOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public TaskRequestInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public String workspace;
    public TaskRequestInput withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}