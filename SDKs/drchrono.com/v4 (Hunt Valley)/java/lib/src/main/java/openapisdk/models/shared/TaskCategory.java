package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public TaskCategory withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public TaskCategory withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public TaskCategory withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_global")
    public String isGlobal;
    public TaskCategory withIsGlobal(String isGlobal) {
        this.isGlobal = isGlobal;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TaskCategory withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("practice_group")
    public Long practiceGroup;
    public TaskCategory withPracticeGroup(Long practiceGroup) {
        this.practiceGroup = practiceGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public TaskCategory withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}