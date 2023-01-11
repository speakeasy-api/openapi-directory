package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDefineIndexFieldQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDefineIndexFieldActionEnum action;
    public PostDefineIndexFieldQueryParams withAction(PostDefineIndexFieldActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDefineIndexFieldVersionEnum version;
    public PostDefineIndexFieldQueryParams withVersion(PostDefineIndexFieldVersionEnum version) {
        this.version = version;
        return this;
    }
}