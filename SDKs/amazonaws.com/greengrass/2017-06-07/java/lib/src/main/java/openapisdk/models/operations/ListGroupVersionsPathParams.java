package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGroupVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public ListGroupVersionsPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}