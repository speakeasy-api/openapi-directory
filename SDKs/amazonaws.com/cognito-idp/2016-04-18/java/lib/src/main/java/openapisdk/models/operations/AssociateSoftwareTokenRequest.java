package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateSoftwareTokenRequest {
    public AssociateSoftwareTokenHeaders headers;
    public AssociateSoftwareTokenRequest withHeaders(AssociateSoftwareTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateSoftwareTokenRequest request;
    public AssociateSoftwareTokenRequest withRequest(openapisdk.models.shared.AssociateSoftwareTokenRequest request) {
        this.request = request;
        return this;
    }
}