package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProvisionPermissionSetRequest {
    public ProvisionPermissionSetHeaders headers;
    public ProvisionPermissionSetRequest withHeaders(ProvisionPermissionSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProvisionPermissionSetRequest request;
    public ProvisionPermissionSetRequest withRequest(openapisdk.models.shared.ProvisionPermissionSetRequest request) {
        this.request = request;
        return this;
    }
}