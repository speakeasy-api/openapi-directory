package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminInitiateAuthRequest {
    public AdminInitiateAuthHeaders headers;
    public AdminInitiateAuthRequest withHeaders(AdminInitiateAuthHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminInitiateAuthRequest request;
    public AdminInitiateAuthRequest withRequest(openapisdk.models.shared.AdminInitiateAuthRequest request) {
        this.request = request;
        return this;
    }
}