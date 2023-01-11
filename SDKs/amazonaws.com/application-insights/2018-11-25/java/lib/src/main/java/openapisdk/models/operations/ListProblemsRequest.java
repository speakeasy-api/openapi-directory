package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProblemsRequest {
    public ListProblemsQueryParams queryParams;
    public ListProblemsRequest withQueryParams(ListProblemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProblemsHeaders headers;
    public ListProblemsRequest withHeaders(ListProblemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListProblemsRequest request;
    public ListProblemsRequest withRequest(openapisdk.models.shared.ListProblemsRequest request) {
        this.request = request;
        return this;
    }
}