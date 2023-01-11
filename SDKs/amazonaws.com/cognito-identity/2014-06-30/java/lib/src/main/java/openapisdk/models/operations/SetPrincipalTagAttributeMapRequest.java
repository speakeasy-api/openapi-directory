package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetPrincipalTagAttributeMapRequest {
    public SetPrincipalTagAttributeMapHeaders headers;
    public SetPrincipalTagAttributeMapRequest withHeaders(SetPrincipalTagAttributeMapHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetPrincipalTagAttributeMapInput request;
    public SetPrincipalTagAttributeMapRequest withRequest(openapisdk.models.shared.SetPrincipalTagAttributeMapInput request) {
        this.request = request;
        return this;
    }
}