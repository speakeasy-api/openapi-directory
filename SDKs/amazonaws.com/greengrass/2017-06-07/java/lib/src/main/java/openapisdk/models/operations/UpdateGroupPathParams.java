package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public UpdateGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}