package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WorkflowType
 * Represents a workflow type.
**/
public class WorkflowType {
    @JsonProperty("name")
    public String name;
    public WorkflowType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public WorkflowType withVersion(String version) {
        this.version = version;
        return this;
    }
}