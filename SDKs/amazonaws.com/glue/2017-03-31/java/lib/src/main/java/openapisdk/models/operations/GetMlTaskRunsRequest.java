package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMlTaskRunsRequest {
    public GetMlTaskRunsQueryParams queryParams;
    public GetMlTaskRunsRequest withQueryParams(GetMlTaskRunsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMlTaskRunsHeaders headers;
    public GetMlTaskRunsRequest withHeaders(GetMlTaskRunsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMlTaskRunsRequest request;
    public GetMlTaskRunsRequest withRequest(openapisdk.models.shared.GetMlTaskRunsRequest request) {
        this.request = request;
        return this;
    }
}