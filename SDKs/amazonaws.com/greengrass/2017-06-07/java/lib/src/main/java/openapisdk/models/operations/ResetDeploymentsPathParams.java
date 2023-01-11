package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetDeploymentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public ResetDeploymentsPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}