package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnrollmentStatusRequest {
    public UpdateEnrollmentStatusHeaders headers;
    public UpdateEnrollmentStatusRequest withHeaders(UpdateEnrollmentStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEnrollmentStatusRequest request;
    public UpdateEnrollmentStatusRequest withRequest(openapisdk.models.shared.UpdateEnrollmentStatusRequest request) {
        this.request = request;
        return this;
    }
}