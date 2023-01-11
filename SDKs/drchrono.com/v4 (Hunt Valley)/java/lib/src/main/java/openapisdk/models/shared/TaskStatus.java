package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public TaskStatus withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public TaskStatus withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public TaskStatus withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TaskStatus withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("practice_group")
    public Long practiceGroup;
    public TaskStatus withPracticeGroup(Long practiceGroup) {
        this.practiceGroup = practiceGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_category")
    public TaskStatusStatusCategoryEnum statusCategory;
    public TaskStatus withStatusCategory(TaskStatusStatusCategoryEnum statusCategory) {
        this.statusCategory = statusCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_category")
    public Long taskCategory;
    public TaskStatus withTaskCategory(Long taskCategory) {
        this.taskCategory = taskCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public TaskStatus withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}