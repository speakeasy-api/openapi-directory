package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyIdFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyIdFormatActionEnum action;
    public PostModifyIdFormatQueryParams withAction(PostModifyIdFormatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyIdFormatVersionEnum version;
    public PostModifyIdFormatQueryParams withVersion(PostModifyIdFormatVersionEnum version) {
        this.version = version;
        return this;
    }
}