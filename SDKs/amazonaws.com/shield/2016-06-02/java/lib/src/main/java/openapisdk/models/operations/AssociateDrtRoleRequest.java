package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateDrtRoleRequest {
    public AssociateDrtRoleHeaders headers;
    public AssociateDrtRoleRequest withHeaders(AssociateDrtRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateDrtRoleRequest request;
    public AssociateDrtRoleRequest withRequest(openapisdk.models.shared.AssociateDrtRoleRequest request) {
        this.request = request;
        return this;
    }
}