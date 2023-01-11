package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMlTransformsRequest {
    public GetMlTransformsQueryParams queryParams;
    public GetMlTransformsRequest withQueryParams(GetMlTransformsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMlTransformsHeaders headers;
    public GetMlTransformsRequest withHeaders(GetMlTransformsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMlTransformsRequest request;
    public GetMlTransformsRequest withRequest(openapisdk.models.shared.GetMlTransformsRequest request) {
        this.request = request;
        return this;
    }
}