package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public CreateGroupVersionPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}