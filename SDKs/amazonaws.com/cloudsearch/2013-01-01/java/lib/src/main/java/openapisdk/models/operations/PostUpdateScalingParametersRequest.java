package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateScalingParametersRequest {
    public PostUpdateScalingParametersQueryParams queryParams;
    public PostUpdateScalingParametersRequest withQueryParams(PostUpdateScalingParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateScalingParametersHeaders headers;
    public PostUpdateScalingParametersRequest withHeaders(PostUpdateScalingParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateScalingParametersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}