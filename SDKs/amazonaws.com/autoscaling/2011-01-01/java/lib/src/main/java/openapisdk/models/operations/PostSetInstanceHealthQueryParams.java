package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetInstanceHealthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetInstanceHealthActionEnum action;
    public PostSetInstanceHealthQueryParams withAction(PostSetInstanceHealthActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetInstanceHealthVersionEnum version;
    public PostSetInstanceHealthQueryParams withVersion(PostSetInstanceHealthVersionEnum version) {
        this.version = version;
        return this;
    }
}