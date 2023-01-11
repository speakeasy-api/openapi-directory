package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteOptionGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteOptionGroupActionEnum action;
    public PostDeleteOptionGroupQueryParams withAction(PostDeleteOptionGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteOptionGroupVersionEnum version;
    public PostDeleteOptionGroupQueryParams withVersion(PostDeleteOptionGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}