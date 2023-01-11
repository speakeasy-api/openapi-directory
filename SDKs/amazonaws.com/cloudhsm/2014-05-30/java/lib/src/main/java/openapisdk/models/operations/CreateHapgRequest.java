package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateHapgRequest {
    public CreateHapgHeaders headers;
    public CreateHapgRequest withHeaders(CreateHapgHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateHapgRequest request;
    public CreateHapgRequest withRequest(openapisdk.models.shared.CreateHapgRequest request) {
        this.request = request;
        return this;
    }
}