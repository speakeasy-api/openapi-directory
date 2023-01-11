package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Task {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public Task withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigned_by")
    public String assignedBy;
    public Task withAssignedBy(String assignedBy) {
        this.assignedBy = assignedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee_group")
    public Long assigneeGroup;
    public Task withAssigneeGroup(Long assigneeGroup) {
        this.assigneeGroup = assigneeGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee_user")
    public String assigneeUser;
    public Task withAssigneeUser(String assigneeUser) {
        this.assigneeUser = assigneeUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associated_items")
    public TaskAssociatedTaskItem[] associatedItems;
    public Task withAssociatedItems(TaskAssociatedTaskItem[] associatedItems) {
        this.associatedItems = associatedItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public Long category;
    public Task withCategory(Long category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public Task withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public Task withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_date")
    public TaskTaskReminder dueDate;
    public Task withDueDate(TaskTaskReminder dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Task withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public TaskTaskNote[] notes;
    public Task withNotes(TaskTaskNote[] notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public TaskPriorityEnum priority;
    public Task withPriority(TaskPriorityEnum priority) {
        this.priority = priority;
        return this;
    }
    @JsonProperty("status")
    public Long status;
    public Task withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public Task withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public Task withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}