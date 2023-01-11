package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRecordsRequest {
    public UpdateRecordsPathParams pathParams;
    public UpdateRecordsRequest withPathParams(UpdateRecordsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateRecordsHeaders headers;
    public UpdateRecordsRequest withHeaders(UpdateRecordsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateRecordsRequestBody request;
    public UpdateRecordsRequest withRequest(UpdateRecordsRequestBody request) {
        this.request = request;
        return this;
    }
}