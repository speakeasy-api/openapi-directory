package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLogGroupFieldsRequest {
    public GetLogGroupFieldsHeaders headers;
    public GetLogGroupFieldsRequest withHeaders(GetLogGroupFieldsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLogGroupFieldsRequest request;
    public GetLogGroupFieldsRequest withRequest(openapisdk.models.shared.GetLogGroupFieldsRequest request) {
        this.request = request;
        return this;
    }
}