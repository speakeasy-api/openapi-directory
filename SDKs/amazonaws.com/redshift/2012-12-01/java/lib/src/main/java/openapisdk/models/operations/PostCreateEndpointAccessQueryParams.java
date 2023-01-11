package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateEndpointAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateEndpointAccessActionEnum action;
    public PostCreateEndpointAccessQueryParams withAction(PostCreateEndpointAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateEndpointAccessVersionEnum version;
    public PostCreateEndpointAccessQueryParams withVersion(PostCreateEndpointAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}