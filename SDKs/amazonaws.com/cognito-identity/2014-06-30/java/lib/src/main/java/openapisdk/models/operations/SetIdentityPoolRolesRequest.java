package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetIdentityPoolRolesRequest {
    public SetIdentityPoolRolesHeaders headers;
    public SetIdentityPoolRolesRequest withHeaders(SetIdentityPoolRolesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIdentityPoolRolesInput request;
    public SetIdentityPoolRolesRequest withRequest(openapisdk.models.shared.SetIdentityPoolRolesInput request) {
        this.request = request;
        return this;
    }
}