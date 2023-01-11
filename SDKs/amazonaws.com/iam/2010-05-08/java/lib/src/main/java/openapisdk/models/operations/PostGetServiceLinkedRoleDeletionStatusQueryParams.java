package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetServiceLinkedRoleDeletionStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetServiceLinkedRoleDeletionStatusActionEnum action;
    public PostGetServiceLinkedRoleDeletionStatusQueryParams withAction(PostGetServiceLinkedRoleDeletionStatusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetServiceLinkedRoleDeletionStatusVersionEnum version;
    public PostGetServiceLinkedRoleDeletionStatusQueryParams withVersion(PostGetServiceLinkedRoleDeletionStatusVersionEnum version) {
        this.version = version;
        return this;
    }
}