package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRecordRequest {
    public PutRecordPathParams pathParams;
    public PutRecordRequest withPathParams(PutRecordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutRecordHeaders headers;
    public PutRecordRequest withHeaders(PutRecordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutRecordRequestBody request;
    public PutRecordRequest withRequest(PutRecordRequestBody request) {
        this.request = request;
        return this;
    }
}