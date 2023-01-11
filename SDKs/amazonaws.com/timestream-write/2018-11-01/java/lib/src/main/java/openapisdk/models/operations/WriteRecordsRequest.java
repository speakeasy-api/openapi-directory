package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WriteRecordsRequest {
    public WriteRecordsHeaders headers;
    public WriteRecordsRequest withHeaders(WriteRecordsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WriteRecordsRequest request;
    public WriteRecordsRequest withRequest(openapisdk.models.shared.WriteRecordsRequest request) {
        this.request = request;
        return this;
    }
}