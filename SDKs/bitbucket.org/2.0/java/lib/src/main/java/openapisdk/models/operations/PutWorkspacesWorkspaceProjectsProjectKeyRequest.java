package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWorkspacesWorkspaceProjectsProjectKeyRequest {
    public PutWorkspacesWorkspaceProjectsProjectKeyPathParams pathParams;
    public PutWorkspacesWorkspaceProjectsProjectKeyRequest withPathParams(PutWorkspacesWorkspaceProjectsProjectKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutWorkspacesWorkspaceProjectsProjectKeyRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PutWorkspacesWorkspaceProjectsProjectKeySecurity security;
    public PutWorkspacesWorkspaceProjectsProjectKeyRequest withSecurity(PutWorkspacesWorkspaceProjectsProjectKeySecurity security) {
        this.security = security;
        return this;
    }
}