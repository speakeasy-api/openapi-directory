package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateOptionGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateOptionGroupActionEnum action;
    public PostCreateOptionGroupQueryParams withAction(PostCreateOptionGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateOptionGroupVersionEnum version;
    public PostCreateOptionGroupQueryParams withVersion(PostCreateOptionGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}