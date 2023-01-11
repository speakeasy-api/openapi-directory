package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteIndexFieldQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteIndexFieldActionEnum action;
    public PostDeleteIndexFieldQueryParams withAction(PostDeleteIndexFieldActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteIndexFieldVersionEnum version;
    public PostDeleteIndexFieldQueryParams withVersion(PostDeleteIndexFieldVersionEnum version) {
        this.version = version;
        return this;
    }
}