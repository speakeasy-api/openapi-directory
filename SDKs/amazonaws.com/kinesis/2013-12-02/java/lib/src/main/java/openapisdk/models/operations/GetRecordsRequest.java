package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecordsRequest {
    public GetRecordsHeaders headers;
    public GetRecordsRequest withHeaders(GetRecordsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRecordsInput request;
    public GetRecordsRequest withRequest(openapisdk.models.shared.GetRecordsInput request) {
        this.request = request;
        return this;
    }
}