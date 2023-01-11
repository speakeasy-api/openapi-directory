package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportTerminologyRequest {
    public ImportTerminologyHeaders headers;
    public ImportTerminologyRequest withHeaders(ImportTerminologyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportTerminologyRequest request;
    public ImportTerminologyRequest withRequest(openapisdk.models.shared.ImportTerminologyRequest request) {
        this.request = request;
        return this;
    }
}