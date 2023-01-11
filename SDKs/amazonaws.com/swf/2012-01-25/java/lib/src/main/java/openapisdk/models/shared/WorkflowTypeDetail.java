package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WorkflowTypeDetail
 * Contains details about a workflow type.
**/
public class WorkflowTypeDetail {
    @JsonProperty("configuration")
    public WorkflowTypeConfiguration configuration;
    public WorkflowTypeDetail withConfiguration(WorkflowTypeConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonProperty("typeInfo")
    public WorkflowTypeInfo typeInfo;
    public WorkflowTypeDetail withTypeInfo(WorkflowTypeInfo typeInfo) {
        this.typeInfo = typeInfo;
        return this;
    }
}