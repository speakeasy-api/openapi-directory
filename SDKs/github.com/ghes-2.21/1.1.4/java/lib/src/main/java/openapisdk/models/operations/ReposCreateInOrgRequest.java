package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateInOrgRequest {
    public ReposCreateInOrgPathParams pathParams;
    public ReposCreateInOrgRequest withPathParams(ReposCreateInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateInOrgRequestBody request;
    public ReposCreateInOrgRequest withRequest(ReposCreateInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}