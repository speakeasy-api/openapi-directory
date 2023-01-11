package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnrollmentStatusRequest {
    public GetEnrollmentStatusHeaders headers;
    public GetEnrollmentStatusRequest withHeaders(GetEnrollmentStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetEnrollmentStatusRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}