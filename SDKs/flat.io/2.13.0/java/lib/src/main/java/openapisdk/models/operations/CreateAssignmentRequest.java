package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssignmentRequest {
    public CreateAssignmentPathParams pathParams;
    public CreateAssignmentRequest withPathParams(CreateAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignmentCreation request;
    public CreateAssignmentRequest withRequest(openapisdk.models.shared.AssignmentCreation request) {
        this.request = request;
        return this;
    }
    public CreateAssignmentSecurity security;
    public CreateAssignmentRequest withSecurity(CreateAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}