package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTestGridUrlRequest {
    public CreateTestGridUrlHeaders headers;
    public CreateTestGridUrlRequest withHeaders(CreateTestGridUrlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTestGridUrlRequest request;
    public CreateTestGridUrlRequest withRequest(openapisdk.models.shared.CreateTestGridUrlRequest request) {
        this.request = request;
        return this;
    }
}