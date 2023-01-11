package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopImageBuilderRequest {
    public StopImageBuilderHeaders headers;
    public StopImageBuilderRequest withHeaders(StopImageBuilderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopImageBuilderRequest request;
    public StopImageBuilderRequest withRequest(openapisdk.models.shared.StopImageBuilderRequest request) {
        this.request = request;
        return this;
    }
}