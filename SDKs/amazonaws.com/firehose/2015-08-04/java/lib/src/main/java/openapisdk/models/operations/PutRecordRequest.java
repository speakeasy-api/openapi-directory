package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRecordRequest {
    public PutRecordHeaders headers;
    public PutRecordRequest withHeaders(PutRecordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRecordInput request;
    public PutRecordRequest withRequest(openapisdk.models.shared.PutRecordInput request) {
        this.request = request;
        return this;
    }
}