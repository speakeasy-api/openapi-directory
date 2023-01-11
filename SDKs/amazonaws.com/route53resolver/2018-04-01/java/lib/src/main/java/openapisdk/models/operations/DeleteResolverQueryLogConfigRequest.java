package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResolverQueryLogConfigRequest {
    public DeleteResolverQueryLogConfigHeaders headers;
    public DeleteResolverQueryLogConfigRequest withHeaders(DeleteResolverQueryLogConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteResolverQueryLogConfigRequest request;
    public DeleteResolverQueryLogConfigRequest withRequest(openapisdk.models.shared.DeleteResolverQueryLogConfigRequest request) {
        this.request = request;
        return this;
    }
}