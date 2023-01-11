package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAnomalyGroupSummariesRequest {
    public ListAnomalyGroupSummariesQueryParams queryParams;
    public ListAnomalyGroupSummariesRequest withQueryParams(ListAnomalyGroupSummariesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAnomalyGroupSummariesHeaders headers;
    public ListAnomalyGroupSummariesRequest withHeaders(ListAnomalyGroupSummariesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListAnomalyGroupSummariesRequestBody request;
    public ListAnomalyGroupSummariesRequest withRequest(ListAnomalyGroupSummariesRequestBody request) {
        this.request = request;
        return this;
    }
}