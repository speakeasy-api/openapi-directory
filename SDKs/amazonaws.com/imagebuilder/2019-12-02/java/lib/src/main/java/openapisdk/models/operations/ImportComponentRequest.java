package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportComponentRequest {
    public ImportComponentHeaders headers;
    public ImportComponentRequest withHeaders(ImportComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ImportComponentRequestBody request;
    public ImportComponentRequest withRequest(ImportComponentRequestBody request) {
        this.request = request;
        return this;
    }
}