package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReportDefinitionRequest {
    public DeleteReportDefinitionHeaders headers;
    public DeleteReportDefinitionRequest withHeaders(DeleteReportDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteReportDefinitionRequest request;
    public DeleteReportDefinitionRequest withRequest(openapisdk.models.shared.DeleteReportDefinitionRequest request) {
        this.request = request;
        return this;
    }
}