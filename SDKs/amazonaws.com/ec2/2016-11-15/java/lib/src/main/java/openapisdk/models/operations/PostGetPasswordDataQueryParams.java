package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetPasswordDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetPasswordDataActionEnum action;
    public PostGetPasswordDataQueryParams withAction(PostGetPasswordDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetPasswordDataVersionEnum version;
    public PostGetPasswordDataQueryParams withVersion(PostGetPasswordDataVersionEnum version) {
        this.version = version;
        return this;
    }
}