package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartBuildRequest {
    public StartBuildHeaders headers;
    public StartBuildRequest withHeaders(StartBuildHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartBuildInput request;
    public StartBuildRequest withRequest(openapisdk.models.shared.StartBuildInput request) {
        this.request = request;
        return this;
    }
}