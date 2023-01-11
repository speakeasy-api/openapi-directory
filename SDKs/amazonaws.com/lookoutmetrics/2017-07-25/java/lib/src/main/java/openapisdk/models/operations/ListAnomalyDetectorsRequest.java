package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAnomalyDetectorsRequest {
    public ListAnomalyDetectorsQueryParams queryParams;
    public ListAnomalyDetectorsRequest withQueryParams(ListAnomalyDetectorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAnomalyDetectorsHeaders headers;
    public ListAnomalyDetectorsRequest withHeaders(ListAnomalyDetectorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListAnomalyDetectorsRequestBody request;
    public ListAnomalyDetectorsRequest withRequest(ListAnomalyDetectorsRequestBody request) {
        this.request = request;
        return this;
    }
}