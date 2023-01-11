package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSystemTemplateRevisionsRequest {
    public GetSystemTemplateRevisionsQueryParams queryParams;
    public GetSystemTemplateRevisionsRequest withQueryParams(GetSystemTemplateRevisionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSystemTemplateRevisionsHeaders headers;
    public GetSystemTemplateRevisionsRequest withHeaders(GetSystemTemplateRevisionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSystemTemplateRevisionsRequest request;
    public GetSystemTemplateRevisionsRequest withRequest(openapisdk.models.shared.GetSystemTemplateRevisionsRequest request) {
        this.request = request;
        return this;
    }
}