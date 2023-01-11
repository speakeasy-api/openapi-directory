package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOpenIdTokenForDeveloperIdentityRequest {
    public GetOpenIdTokenForDeveloperIdentityHeaders headers;
    public GetOpenIdTokenForDeveloperIdentityRequest withHeaders(GetOpenIdTokenForDeveloperIdentityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetOpenIdTokenForDeveloperIdentityInput request;
    public GetOpenIdTokenForDeveloperIdentityRequest withRequest(openapisdk.models.shared.GetOpenIdTokenForDeveloperIdentityInput request) {
        this.request = request;
        return this;
    }
}