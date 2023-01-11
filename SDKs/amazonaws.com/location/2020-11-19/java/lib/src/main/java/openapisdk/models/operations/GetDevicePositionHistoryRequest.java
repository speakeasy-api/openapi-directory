package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevicePositionHistoryRequest {
    public GetDevicePositionHistoryPathParams pathParams;
    public GetDevicePositionHistoryRequest withPathParams(GetDevicePositionHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDevicePositionHistoryQueryParams queryParams;
    public GetDevicePositionHistoryRequest withQueryParams(GetDevicePositionHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDevicePositionHistoryHeaders headers;
    public GetDevicePositionHistoryRequest withHeaders(GetDevicePositionHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetDevicePositionHistoryRequestBody request;
    public GetDevicePositionHistoryRequest withRequest(GetDevicePositionHistoryRequestBody request) {
        this.request = request;
        return this;
    }
}