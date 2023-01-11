package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListWorkspacesResponse
 * Represents the output of a ListWorkspaces operation.
**/
public class ListWorkspacesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListWorkspacesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("workspaces")
    public WorkspaceSummary[] workspaces;
    public ListWorkspacesResponse withWorkspaces(WorkspaceSummary[] workspaces) {
        this.workspaces = workspaces;
        return this;
    }
}