package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnlinkIdentityRequest {
    public UnlinkIdentityHeaders headers;
    public UnlinkIdentityRequest withHeaders(UnlinkIdentityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnlinkIdentityInput request;
    public UnlinkIdentityRequest withRequest(openapisdk.models.shared.UnlinkIdentityInput request) {
        this.request = request;
        return this;
    }
}