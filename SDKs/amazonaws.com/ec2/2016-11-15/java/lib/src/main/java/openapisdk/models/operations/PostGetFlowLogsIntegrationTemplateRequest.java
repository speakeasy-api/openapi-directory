package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetFlowLogsIntegrationTemplateRequest {
    public PostGetFlowLogsIntegrationTemplateQueryParams queryParams;
    public PostGetFlowLogsIntegrationTemplateRequest withQueryParams(PostGetFlowLogsIntegrationTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetFlowLogsIntegrationTemplateHeaders headers;
    public PostGetFlowLogsIntegrationTemplateRequest withHeaders(PostGetFlowLogsIntegrationTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetFlowLogsIntegrationTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}