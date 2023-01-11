package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPrincipalTagAttributeMapRequest {
    public GetPrincipalTagAttributeMapHeaders headers;
    public GetPrincipalTagAttributeMapRequest withHeaders(GetPrincipalTagAttributeMapHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPrincipalTagAttributeMapInput request;
    public GetPrincipalTagAttributeMapRequest withRequest(openapisdk.models.shared.GetPrincipalTagAttributeMapInput request) {
        this.request = request;
        return this;
    }
}