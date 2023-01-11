package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopBuildRequest {
    public StopBuildHeaders headers;
    public StopBuildRequest withHeaders(StopBuildHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopBuildInput request;
    public StopBuildRequest withRequest(openapisdk.models.shared.StopBuildInput request) {
        this.request = request;
        return this;
    }
}