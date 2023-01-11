package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyIdentityIdFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyIdentityIdFormatActionEnum action;
    public PostModifyIdentityIdFormatQueryParams withAction(PostModifyIdentityIdFormatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyIdentityIdFormatVersionEnum version;
    public PostModifyIdentityIdFormatQueryParams withVersion(PostModifyIdentityIdFormatVersionEnum version) {
        this.version = version;
        return this;
    }
}