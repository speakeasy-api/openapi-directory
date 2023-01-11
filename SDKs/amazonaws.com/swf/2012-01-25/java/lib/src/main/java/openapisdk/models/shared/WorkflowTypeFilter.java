package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowTypeFilter
 * Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.
**/
public class WorkflowTypeFilter {
    @JsonProperty("name")
    public String name;
    public WorkflowTypeFilter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public WorkflowTypeFilter withVersion(String version) {
        this.version = version;
        return this;
    }
}