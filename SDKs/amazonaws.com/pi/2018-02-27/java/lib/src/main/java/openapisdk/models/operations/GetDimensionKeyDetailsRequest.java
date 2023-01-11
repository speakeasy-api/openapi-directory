package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDimensionKeyDetailsRequest {
    public GetDimensionKeyDetailsHeaders headers;
    public GetDimensionKeyDetailsRequest withHeaders(GetDimensionKeyDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDimensionKeyDetailsRequest request;
    public GetDimensionKeyDetailsRequest withRequest(openapisdk.models.shared.GetDimensionKeyDetailsRequest request) {
        this.request = request;
        return this;
    }
}