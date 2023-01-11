package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecordingConfigurationsRequest {
    public ListRecordingConfigurationsQueryParams queryParams;
    public ListRecordingConfigurationsRequest withQueryParams(ListRecordingConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRecordingConfigurationsHeaders headers;
    public ListRecordingConfigurationsRequest withHeaders(ListRecordingConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListRecordingConfigurationsRequestBody request;
    public ListRecordingConfigurationsRequest withRequest(ListRecordingConfigurationsRequestBody request) {
        this.request = request;
        return this;
    }
}