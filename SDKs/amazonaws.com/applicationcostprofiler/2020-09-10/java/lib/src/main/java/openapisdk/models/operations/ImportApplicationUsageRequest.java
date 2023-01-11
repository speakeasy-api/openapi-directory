package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportApplicationUsageRequest {
    public ImportApplicationUsageHeaders headers;
    public ImportApplicationUsageRequest withHeaders(ImportApplicationUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ImportApplicationUsageRequestBody request;
    public ImportApplicationUsageRequest withRequest(ImportApplicationUsageRequestBody request) {
        this.request = request;
        return this;
    }
}