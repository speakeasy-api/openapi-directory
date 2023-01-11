package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyReportDefinitionRequest {
    public ModifyReportDefinitionHeaders headers;
    public ModifyReportDefinitionRequest withHeaders(ModifyReportDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyReportDefinitionRequest request;
    public ModifyReportDefinitionRequest withRequest(openapisdk.models.shared.ModifyReportDefinitionRequest request) {
        this.request = request;
        return this;
    }
}