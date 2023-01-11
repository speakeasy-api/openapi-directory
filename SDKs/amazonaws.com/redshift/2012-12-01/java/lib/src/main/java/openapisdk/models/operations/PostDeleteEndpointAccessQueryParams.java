package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteEndpointAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteEndpointAccessActionEnum action;
    public PostDeleteEndpointAccessQueryParams withAction(PostDeleteEndpointAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteEndpointAccessVersionEnum version;
    public PostDeleteEndpointAccessQueryParams withVersion(PostDeleteEndpointAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}