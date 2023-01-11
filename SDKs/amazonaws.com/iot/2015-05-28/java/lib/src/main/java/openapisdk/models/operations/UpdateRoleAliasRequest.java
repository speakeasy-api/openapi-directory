package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoleAliasRequest {
    public UpdateRoleAliasPathParams pathParams;
    public UpdateRoleAliasRequest withPathParams(UpdateRoleAliasPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateRoleAliasHeaders headers;
    public UpdateRoleAliasRequest withHeaders(UpdateRoleAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateRoleAliasRequestBody request;
    public UpdateRoleAliasRequest withRequest(UpdateRoleAliasRequestBody request) {
        this.request = request;
        return this;
    }
}