package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLogsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LogsRequestBody request;
    public GetLogsRequest withRequest(openapisdk.models.shared.LogsRequestBody request) {
        this.request = request;
        return this;
    }
}