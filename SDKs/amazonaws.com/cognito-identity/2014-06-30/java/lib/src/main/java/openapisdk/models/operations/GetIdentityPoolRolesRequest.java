package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIdentityPoolRolesRequest {
    public GetIdentityPoolRolesHeaders headers;
    public GetIdentityPoolRolesRequest withHeaders(GetIdentityPoolRolesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIdentityPoolRolesInput request;
    public GetIdentityPoolRolesRequest withRequest(openapisdk.models.shared.GetIdentityPoolRolesInput request) {
        this.request = request;
        return this;
    }
}