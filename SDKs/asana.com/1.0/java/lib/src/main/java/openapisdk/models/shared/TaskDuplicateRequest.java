package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskDuplicateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public TaskDuplicateRequestIncludeEnum include;
    public TaskDuplicateRequest withInclude(TaskDuplicateRequestIncludeEnum include) {
        this.include = include;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TaskDuplicateRequest withName(String name) {
        this.name = name;
        return this;
    }
}