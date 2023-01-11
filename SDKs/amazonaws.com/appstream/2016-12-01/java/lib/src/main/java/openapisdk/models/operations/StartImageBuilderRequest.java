package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartImageBuilderRequest {
    public StartImageBuilderHeaders headers;
    public StartImageBuilderRequest withHeaders(StartImageBuilderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartImageBuilderRequest request;
    public StartImageBuilderRequest withRequest(openapisdk.models.shared.StartImageBuilderRequest request) {
        this.request = request;
        return this;
    }
}