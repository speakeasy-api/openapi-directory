package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MnrgaRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MnrgaRequestBody request;
    public MnrgaRequest withRequest(MnrgaRequestBody request) {
        this.request = request;
        return this;
    }
    public MnrgaSecurity security;
    public MnrgaRequest withSecurity(MnrgaSecurity security) {
        this.security = security;
        return this;
    }
}