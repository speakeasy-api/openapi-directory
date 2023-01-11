package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutReportDefinitionRequest {
    public PutReportDefinitionHeaders headers;
    public PutReportDefinitionRequest withHeaders(PutReportDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutReportDefinitionRequestBody request;
    public PutReportDefinitionRequest withRequest(PutReportDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}