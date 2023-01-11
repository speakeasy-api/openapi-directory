package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateRandomRequest {
    public GenerateRandomHeaders headers;
    public GenerateRandomRequest withHeaders(GenerateRandomHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateRandomRequest request;
    public GenerateRandomRequest withRequest(openapisdk.models.shared.GenerateRandomRequest request) {
        this.request = request;
        return this;
    }
}