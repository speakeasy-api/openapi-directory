package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateReportDefinitionRequest {
    public UpdateReportDefinitionPathParams pathParams;
    public UpdateReportDefinitionRequest withPathParams(UpdateReportDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateReportDefinitionHeaders headers;
    public UpdateReportDefinitionRequest withHeaders(UpdateReportDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateReportDefinitionRequestBody request;
    public UpdateReportDefinitionRequest withRequest(UpdateReportDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}