package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResolverDnssecConfigRequest {
    public UpdateResolverDnssecConfigHeaders headers;
    public UpdateResolverDnssecConfigRequest withHeaders(UpdateResolverDnssecConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateResolverDnssecConfigRequest request;
    public UpdateResolverDnssecConfigRequest withRequest(openapisdk.models.shared.UpdateResolverDnssecConfigRequest request) {
        this.request = request;
        return this;
    }
}