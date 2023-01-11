package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateAdminAccountRequest {
    public AssociateAdminAccountHeaders headers;
    public AssociateAdminAccountRequest withHeaders(AssociateAdminAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateAdminAccountRequest request;
    public AssociateAdminAccountRequest withRequest(openapisdk.models.shared.AssociateAdminAccountRequest request) {
        this.request = request;
        return this;
    }
}