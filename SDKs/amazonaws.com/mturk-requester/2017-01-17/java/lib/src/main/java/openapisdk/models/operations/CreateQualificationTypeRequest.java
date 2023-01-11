package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateQualificationTypeRequest {
    public CreateQualificationTypeHeaders headers;
    public CreateQualificationTypeRequest withHeaders(CreateQualificationTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateQualificationTypeRequest request;
    public CreateQualificationTypeRequest withRequest(openapisdk.models.shared.CreateQualificationTypeRequest request) {
        this.request = request;
        return this;
    }
}