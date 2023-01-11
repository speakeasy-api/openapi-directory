package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFaceSearchRequest {
    public GetFaceSearchQueryParams queryParams;
    public GetFaceSearchRequest withQueryParams(GetFaceSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFaceSearchHeaders headers;
    public GetFaceSearchRequest withHeaders(GetFaceSearchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetFaceSearchRequest request;
    public GetFaceSearchRequest withRequest(openapisdk.models.shared.GetFaceSearchRequest request) {
        this.request = request;
        return this;
    }
}