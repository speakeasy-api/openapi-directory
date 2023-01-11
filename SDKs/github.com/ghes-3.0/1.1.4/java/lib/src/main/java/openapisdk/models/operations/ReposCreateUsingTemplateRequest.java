package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateUsingTemplateRequest {
    public ReposCreateUsingTemplatePathParams pathParams;
    public ReposCreateUsingTemplateRequest withPathParams(ReposCreateUsingTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateUsingTemplateRequestBody request;
    public ReposCreateUsingTemplateRequest withRequest(ReposCreateUsingTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}