package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUniqueProblemsRequest {
    public ListUniqueProblemsQueryParams queryParams;
    public ListUniqueProblemsRequest withQueryParams(ListUniqueProblemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUniqueProblemsHeaders headers;
    public ListUniqueProblemsRequest withHeaders(ListUniqueProblemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListUniqueProblemsRequest request;
    public ListUniqueProblemsRequest withRequest(openapisdk.models.shared.ListUniqueProblemsRequest request) {
        this.request = request;
        return this;
    }
}