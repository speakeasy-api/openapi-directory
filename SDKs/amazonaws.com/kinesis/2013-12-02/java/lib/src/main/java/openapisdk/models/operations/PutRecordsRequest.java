package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRecordsRequest {
    public PutRecordsHeaders headers;
    public PutRecordsRequest withHeaders(PutRecordsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRecordsInput request;
    public PutRecordsRequest withRequest(openapisdk.models.shared.PutRecordsInput request) {
        this.request = request;
        return this;
    }
}