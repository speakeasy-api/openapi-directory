package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFhirImportJobRequest {
    public DescribeFhirImportJobHeaders headers;
    public DescribeFhirImportJobRequest withHeaders(DescribeFhirImportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFhirImportJobRequest request;
    public DescribeFhirImportJobRequest withRequest(openapisdk.models.shared.DescribeFhirImportJobRequest request) {
        this.request = request;
        return this;
    }
}