package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResolverQueryLogConfigRequest {
    public CreateResolverQueryLogConfigHeaders headers;
    public CreateResolverQueryLogConfigRequest withHeaders(CreateResolverQueryLogConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateResolverQueryLogConfigRequest request;
    public CreateResolverQueryLogConfigRequest withRequest(openapisdk.models.shared.CreateResolverQueryLogConfigRequest request) {
        this.request = request;
        return this;
    }
}