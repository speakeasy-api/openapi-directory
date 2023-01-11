package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateHsmRequest {
    public CreateHsmHeaders headers;
    public CreateHsmRequest withHeaders(CreateHsmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateHsmRequest request;
    public CreateHsmRequest withRequest(openapisdk.models.shared.CreateHsmRequest request) {
        this.request = request;
        return this;
    }
}