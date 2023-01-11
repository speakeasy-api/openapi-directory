package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLogPatternsRequest {
    public ListLogPatternsQueryParams queryParams;
    public ListLogPatternsRequest withQueryParams(ListLogPatternsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLogPatternsHeaders headers;
    public ListLogPatternsRequest withHeaders(ListLogPatternsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLogPatternsRequest request;
    public ListLogPatternsRequest withRequest(openapisdk.models.shared.ListLogPatternsRequest request) {
        this.request = request;
        return this;
    }
}