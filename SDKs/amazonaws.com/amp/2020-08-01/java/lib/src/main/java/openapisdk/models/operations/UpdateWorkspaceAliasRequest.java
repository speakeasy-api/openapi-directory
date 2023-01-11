package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkspaceAliasRequest {
    public UpdateWorkspaceAliasPathParams pathParams;
    public UpdateWorkspaceAliasRequest withPathParams(UpdateWorkspaceAliasPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateWorkspaceAliasHeaders headers;
    public UpdateWorkspaceAliasRequest withHeaders(UpdateWorkspaceAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateWorkspaceAliasRequestBody request;
    public UpdateWorkspaceAliasRequest withRequest(UpdateWorkspaceAliasRequestBody request) {
        this.request = request;
        return this;
    }
}