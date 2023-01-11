package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public GetGroupVersionPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupVersionId")
    public String groupVersionId;
    public GetGroupVersionPathParams withGroupVersionId(String groupVersionId) {
        this.groupVersionId = groupVersionId;
        return this;
    }
}