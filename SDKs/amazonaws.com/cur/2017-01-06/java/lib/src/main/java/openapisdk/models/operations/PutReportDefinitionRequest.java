package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutReportDefinitionRequest {
    public PutReportDefinitionHeaders headers;
    public PutReportDefinitionRequest withHeaders(PutReportDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutReportDefinitionRequest request;
    public PutReportDefinitionRequest withRequest(openapisdk.models.shared.PutReportDefinitionRequest request) {
        this.request = request;
        return this;
    }
}