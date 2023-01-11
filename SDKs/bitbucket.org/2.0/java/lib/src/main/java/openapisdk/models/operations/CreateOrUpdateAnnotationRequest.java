package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrUpdateAnnotationRequest {
    public CreateOrUpdateAnnotationPathParams pathParams;
    public CreateOrUpdateAnnotationRequest withPathParams(CreateOrUpdateAnnotationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreateOrUpdateAnnotationRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}