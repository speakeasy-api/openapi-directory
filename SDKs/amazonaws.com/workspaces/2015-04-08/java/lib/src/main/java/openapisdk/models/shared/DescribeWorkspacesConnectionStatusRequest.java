package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeWorkspacesConnectionStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeWorkspacesConnectionStatusRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkspaceIds")
    public String[] workspaceIds;
    public DescribeWorkspacesConnectionStatusRequest withWorkspaceIds(String[] workspaceIds) {
        this.workspaceIds = workspaceIds;
        return this;
    }
}