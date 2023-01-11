package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFhirExportJobRequest {
    public DescribeFhirExportJobHeaders headers;
    public DescribeFhirExportJobRequest withHeaders(DescribeFhirExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFhirExportJobRequest request;
    public DescribeFhirExportJobRequest withRequest(openapisdk.models.shared.DescribeFhirExportJobRequest request) {
        this.request = request;
        return this;
    }
}