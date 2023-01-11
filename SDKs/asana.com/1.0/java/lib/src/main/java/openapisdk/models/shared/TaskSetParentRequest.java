package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskSetParentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_after")
    public String insertAfter;
    public TaskSetParentRequest withInsertAfter(String insertAfter) {
        this.insertAfter = insertAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_before")
    public String insertBefore;
    public TaskSetParentRequest withInsertBefore(String insertBefore) {
        this.insertBefore = insertBefore;
        return this;
    }
    @JsonProperty("parent")
    public String parent;
    public TaskSetParentRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
}