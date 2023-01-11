package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public DeleteGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}