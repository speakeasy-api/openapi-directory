package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListQueryExecutionsRequest {
    public ListQueryExecutionsQueryParams queryParams;
    public ListQueryExecutionsRequest withQueryParams(ListQueryExecutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListQueryExecutionsHeaders headers;
    public ListQueryExecutionsRequest withHeaders(ListQueryExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListQueryExecutionsInput request;
    public ListQueryExecutionsRequest withRequest(openapisdk.models.shared.ListQueryExecutionsInput request) {
        this.request = request;
        return this;
    }
}