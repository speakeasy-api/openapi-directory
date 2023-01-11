package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartFhirImportJobRequest {
    public StartFhirImportJobHeaders headers;
    public StartFhirImportJobRequest withHeaders(StartFhirImportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartFhirImportJobRequest request;
    public StartFhirImportJobRequest withRequest(openapisdk.models.shared.StartFhirImportJobRequest request) {
        this.request = request;
        return this;
    }
}