package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspaceId")
    public String workspaceId;
    public DescribeWorkspacePathParams withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}