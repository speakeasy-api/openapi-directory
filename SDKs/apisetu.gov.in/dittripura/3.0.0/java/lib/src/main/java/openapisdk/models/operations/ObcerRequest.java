package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ObcerRequestBody request;
    public ObcerRequest withRequest(ObcerRequestBody request) {
        this.request = request;
        return this;
    }
    public ObcerSecurity security;
    public ObcerRequest withSecurity(ObcerSecurity security) {
        this.security = security;
        return this;
    }
}