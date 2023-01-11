package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public CreateDeploymentPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}