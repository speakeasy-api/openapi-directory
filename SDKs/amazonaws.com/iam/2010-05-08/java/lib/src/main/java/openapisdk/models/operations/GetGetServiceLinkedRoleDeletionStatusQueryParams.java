package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetServiceLinkedRoleDeletionStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetServiceLinkedRoleDeletionStatusActionEnum action;
    public GetGetServiceLinkedRoleDeletionStatusQueryParams withAction(GetGetServiceLinkedRoleDeletionStatusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeletionTaskId")
    public String deletionTaskId;
    public GetGetServiceLinkedRoleDeletionStatusQueryParams withDeletionTaskId(String deletionTaskId) {
        this.deletionTaskId = deletionTaskId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetServiceLinkedRoleDeletionStatusVersionEnum version;
    public GetGetServiceLinkedRoleDeletionStatusQueryParams withVersion(GetGetServiceLinkedRoleDeletionStatusVersionEnum version) {
        this.version = version;
        return this;
    }
}