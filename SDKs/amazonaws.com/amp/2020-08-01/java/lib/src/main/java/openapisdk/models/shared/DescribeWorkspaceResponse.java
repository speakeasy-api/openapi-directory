package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeWorkspaceResponse
 * Represents the output of a DescribeWorkspace operation.
**/
public class DescribeWorkspaceResponse {
    @JsonProperty("workspace")
    public WorkspaceDescription workspace;
    public DescribeWorkspaceResponse withWorkspace(WorkspaceDescription workspace) {
        this.workspace = workspace;
        return this;
    }
}