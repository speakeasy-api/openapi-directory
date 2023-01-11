package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateGroupEmbargoOptionsDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Long groupId;
    public PrivateGroupEmbargoOptionsDetailsPathParams withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
}