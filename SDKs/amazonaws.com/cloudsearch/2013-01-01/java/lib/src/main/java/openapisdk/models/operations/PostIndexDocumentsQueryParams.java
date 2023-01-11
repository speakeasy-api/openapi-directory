package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostIndexDocumentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostIndexDocumentsActionEnum action;
    public PostIndexDocumentsQueryParams withAction(PostIndexDocumentsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostIndexDocumentsVersionEnum version;
    public PostIndexDocumentsQueryParams withVersion(PostIndexDocumentsVersionEnum version) {
        this.version = version;
        return this;
    }
}