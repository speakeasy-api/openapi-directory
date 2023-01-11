package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateClassRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClassCreation request;
    public CreateClassRequest withRequest(openapisdk.models.shared.ClassCreation request) {
        this.request = request;
        return this;
    }
    public CreateClassSecurity security;
    public CreateClassRequest withSecurity(CreateClassSecurity security) {
        this.security = security;
        return this;
    }
}