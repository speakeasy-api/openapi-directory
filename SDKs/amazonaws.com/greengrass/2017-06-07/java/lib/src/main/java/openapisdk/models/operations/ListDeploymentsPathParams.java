package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public ListDeploymentsPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}