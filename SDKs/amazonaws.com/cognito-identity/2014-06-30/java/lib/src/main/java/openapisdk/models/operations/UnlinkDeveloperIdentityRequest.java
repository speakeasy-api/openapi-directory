package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnlinkDeveloperIdentityRequest {
    public UnlinkDeveloperIdentityHeaders headers;
    public UnlinkDeveloperIdentityRequest withHeaders(UnlinkDeveloperIdentityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnlinkDeveloperIdentityInput request;
    public UnlinkDeveloperIdentityRequest withRequest(openapisdk.models.shared.UnlinkDeveloperIdentityInput request) {
        this.request = request;
        return this;
    }
}