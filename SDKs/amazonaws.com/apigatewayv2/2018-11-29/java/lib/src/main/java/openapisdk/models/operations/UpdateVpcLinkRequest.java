package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVpcLinkRequest {
    public UpdateVpcLinkPathParams pathParams;
    public UpdateVpcLinkRequest withPathParams(UpdateVpcLinkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateVpcLinkHeaders headers;
    public UpdateVpcLinkRequest withHeaders(UpdateVpcLinkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateVpcLinkRequestBody request;
    public UpdateVpcLinkRequest withRequest(UpdateVpcLinkRequestBody request) {
        this.request = request;
        return this;
    }
}