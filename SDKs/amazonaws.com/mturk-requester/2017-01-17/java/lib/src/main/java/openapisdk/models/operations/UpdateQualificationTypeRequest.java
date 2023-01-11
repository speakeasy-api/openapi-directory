package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateQualificationTypeRequest {
    public UpdateQualificationTypeHeaders headers;
    public UpdateQualificationTypeRequest withHeaders(UpdateQualificationTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateQualificationTypeRequest request;
    public UpdateQualificationTypeRequest withRequest(openapisdk.models.shared.UpdateQualificationTypeRequest request) {
        this.request = request;
        return this;
    }
}