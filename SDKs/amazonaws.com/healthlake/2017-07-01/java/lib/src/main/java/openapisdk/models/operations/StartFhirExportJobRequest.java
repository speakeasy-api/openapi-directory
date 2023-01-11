package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartFhirExportJobRequest {
    public StartFhirExportJobHeaders headers;
    public StartFhirExportJobRequest withHeaders(StartFhirExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartFhirExportJobRequest request;
    public StartFhirExportJobRequest withRequest(openapisdk.models.shared.StartFhirExportJobRequest request) {
        this.request = request;
        return this;
    }
}