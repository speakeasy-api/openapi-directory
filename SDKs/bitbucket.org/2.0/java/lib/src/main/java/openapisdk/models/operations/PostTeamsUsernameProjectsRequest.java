package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTeamsUsernameProjectsRequest {
    public PostTeamsUsernameProjectsPathParams pathParams;
    public PostTeamsUsernameProjectsRequest withPathParams(PostTeamsUsernameProjectsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostTeamsUsernameProjectsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostTeamsUsernameProjectsSecurity security;
    public PostTeamsUsernameProjectsRequest withSecurity(PostTeamsUsernameProjectsSecurity security) {
        this.security = security;
        return this;
    }
}