package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImageBuilderRequest {
    public CreateImageBuilderHeaders headers;
    public CreateImageBuilderRequest withHeaders(CreateImageBuilderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateImageBuilderRequest request;
    public CreateImageBuilderRequest withRequest(openapisdk.models.shared.CreateImageBuilderRequest request) {
        this.request = request;
        return this;
    }
}