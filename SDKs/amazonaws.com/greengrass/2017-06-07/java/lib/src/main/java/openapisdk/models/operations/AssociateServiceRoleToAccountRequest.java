package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateServiceRoleToAccountRequest {
    public AssociateServiceRoleToAccountHeaders headers;
    public AssociateServiceRoleToAccountRequest withHeaders(AssociateServiceRoleToAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssociateServiceRoleToAccountRequestBody request;
    public AssociateServiceRoleToAccountRequest withRequest(AssociateServiceRoleToAccountRequestBody request) {
        this.request = request;
        return this;
    }
}