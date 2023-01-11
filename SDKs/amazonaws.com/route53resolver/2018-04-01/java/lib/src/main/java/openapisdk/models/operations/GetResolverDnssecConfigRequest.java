package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResolverDnssecConfigRequest {
    public GetResolverDnssecConfigHeaders headers;
    public GetResolverDnssecConfigRequest withHeaders(GetResolverDnssecConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResolverDnssecConfigRequest request;
    public GetResolverDnssecConfigRequest withRequest(openapisdk.models.shared.GetResolverDnssecConfigRequest request) {
        this.request = request;
        return this;
    }
}