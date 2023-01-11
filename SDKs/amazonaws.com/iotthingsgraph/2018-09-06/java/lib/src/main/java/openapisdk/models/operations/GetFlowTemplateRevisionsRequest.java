package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFlowTemplateRevisionsRequest {
    public GetFlowTemplateRevisionsQueryParams queryParams;
    public GetFlowTemplateRevisionsRequest withQueryParams(GetFlowTemplateRevisionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFlowTemplateRevisionsHeaders headers;
    public GetFlowTemplateRevisionsRequest withHeaders(GetFlowTemplateRevisionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetFlowTemplateRevisionsRequest request;
    public GetFlowTemplateRevisionsRequest withRequest(openapisdk.models.shared.GetFlowTemplateRevisionsRequest request) {
        this.request = request;
        return this;
    }
}