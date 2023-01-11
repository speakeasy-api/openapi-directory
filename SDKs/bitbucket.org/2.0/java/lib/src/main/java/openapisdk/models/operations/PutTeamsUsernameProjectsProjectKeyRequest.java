package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTeamsUsernameProjectsProjectKeyRequest {
    public PutTeamsUsernameProjectsProjectKeyPathParams pathParams;
    public PutTeamsUsernameProjectsProjectKeyRequest withPathParams(PutTeamsUsernameProjectsProjectKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutTeamsUsernameProjectsProjectKeyRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PutTeamsUsernameProjectsProjectKeySecurity security;
    public PutTeamsUsernameProjectsProjectKeyRequest withSecurity(PutTeamsUsernameProjectsProjectKeySecurity security) {
        this.security = security;
        return this;
    }
}