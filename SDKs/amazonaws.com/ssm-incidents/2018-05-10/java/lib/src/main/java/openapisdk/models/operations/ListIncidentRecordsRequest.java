package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIncidentRecordsRequest {
    public ListIncidentRecordsQueryParams queryParams;
    public ListIncidentRecordsRequest withQueryParams(ListIncidentRecordsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIncidentRecordsHeaders headers;
    public ListIncidentRecordsRequest withHeaders(ListIncidentRecordsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListIncidentRecordsRequestBody request;
    public ListIncidentRecordsRequest withRequest(ListIncidentRecordsRequestBody request) {
        this.request = request;
        return this;
    }
}