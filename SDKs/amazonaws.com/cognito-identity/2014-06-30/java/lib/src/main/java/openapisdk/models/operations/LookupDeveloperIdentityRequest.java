package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LookupDeveloperIdentityRequest {
    public LookupDeveloperIdentityHeaders headers;
    public LookupDeveloperIdentityRequest withHeaders(LookupDeveloperIdentityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LookupDeveloperIdentityInput request;
    public LookupDeveloperIdentityRequest withRequest(openapisdk.models.shared.LookupDeveloperIdentityInput request) {
        this.request = request;
        return this;
    }
}