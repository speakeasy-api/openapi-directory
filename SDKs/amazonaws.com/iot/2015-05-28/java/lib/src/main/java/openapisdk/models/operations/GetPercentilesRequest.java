package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPercentilesRequest {
    public GetPercentilesHeaders headers;
    public GetPercentilesRequest withHeaders(GetPercentilesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetPercentilesRequestBody request;
    public GetPercentilesRequest withRequest(GetPercentilesRequestBody request) {
        this.request = request;
        return this;
    }
}