package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLogRecordRequest {
    public GetLogRecordHeaders headers;
    public GetLogRecordRequest withHeaders(GetLogRecordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLogRecordRequest request;
    public GetLogRecordRequest withRequest(openapisdk.models.shared.GetLogRecordRequest request) {
        this.request = request;
        return this;
    }
}