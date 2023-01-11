package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestRenderEmailTemplateRequest {
    public TestRenderEmailTemplatePathParams pathParams;
    public TestRenderEmailTemplateRequest withPathParams(TestRenderEmailTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TestRenderEmailTemplateHeaders headers;
    public TestRenderEmailTemplateRequest withHeaders(TestRenderEmailTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TestRenderEmailTemplateRequestBody request;
    public TestRenderEmailTemplateRequest withRequest(TestRenderEmailTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}