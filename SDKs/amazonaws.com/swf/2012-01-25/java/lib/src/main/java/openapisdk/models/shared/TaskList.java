package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TaskList
 * Represents a task list.
**/
public class TaskList {
    @JsonProperty("name")
    public String name;
    public TaskList withName(String name) {
        this.name = name;
        return this;
    }
}