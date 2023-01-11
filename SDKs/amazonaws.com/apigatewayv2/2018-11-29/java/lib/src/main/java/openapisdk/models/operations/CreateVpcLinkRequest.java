package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVpcLinkRequest {
    public CreateVpcLinkHeaders headers;
    public CreateVpcLinkRequest withHeaders(CreateVpcLinkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateVpcLinkRequestBody request;
    public CreateVpcLinkRequest withRequest(CreateVpcLinkRequestBody request) {
        this.request = request;
        return this;
    }
}