package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTagUserActionEnum action;
    public PostTagUserQueryParams withAction(PostTagUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTagUserVersionEnum version;
    public PostTagUserQueryParams withVersion(PostTagUserVersionEnum version) {
        this.version = version;
        return this;
    }
}