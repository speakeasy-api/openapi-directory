package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopUserImportJobRequest {
    public StopUserImportJobHeaders headers;
    public StopUserImportJobRequest withHeaders(StopUserImportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopUserImportJobRequest request;
    public StopUserImportJobRequest withRequest(openapisdk.models.shared.StopUserImportJobRequest request) {
        this.request = request;
        return this;
    }
}