package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteDevicePositionHistoryRequest {
    public BatchDeleteDevicePositionHistoryPathParams pathParams;
    public BatchDeleteDevicePositionHistoryRequest withPathParams(BatchDeleteDevicePositionHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchDeleteDevicePositionHistoryHeaders headers;
    public BatchDeleteDevicePositionHistoryRequest withHeaders(BatchDeleteDevicePositionHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchDeleteDevicePositionHistoryRequestBody request;
    public BatchDeleteDevicePositionHistoryRequest withRequest(BatchDeleteDevicePositionHistoryRequestBody request) {
        this.request = request;
        return this;
    }
}