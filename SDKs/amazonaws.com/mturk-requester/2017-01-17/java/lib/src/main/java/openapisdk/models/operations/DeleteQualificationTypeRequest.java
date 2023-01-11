package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQualificationTypeRequest {
    public DeleteQualificationTypeHeaders headers;
    public DeleteQualificationTypeRequest withHeaders(DeleteQualificationTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteQualificationTypeRequest request;
    public DeleteQualificationTypeRequest withRequest(openapisdk.models.shared.DeleteQualificationTypeRequest request) {
        this.request = request;
        return this;
    }
}