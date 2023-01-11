package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPartitionsRequest {
    public GetPartitionsQueryParams queryParams;
    public GetPartitionsRequest withQueryParams(GetPartitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPartitionsHeaders headers;
    public GetPartitionsRequest withHeaders(GetPartitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPartitionsRequest request;
    public GetPartitionsRequest withRequest(openapisdk.models.shared.GetPartitionsRequest request) {
        this.request = request;
        return this;
    }
}