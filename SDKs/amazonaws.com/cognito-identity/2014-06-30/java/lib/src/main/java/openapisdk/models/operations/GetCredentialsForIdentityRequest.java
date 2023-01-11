package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCredentialsForIdentityRequest {
    public GetCredentialsForIdentityHeaders headers;
    public GetCredentialsForIdentityRequest withHeaders(GetCredentialsForIdentityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCredentialsForIdentityInput request;
    public GetCredentialsForIdentityRequest withRequest(openapisdk.models.shared.GetCredentialsForIdentityInput request) {
        this.request = request;
        return this;
    }
}