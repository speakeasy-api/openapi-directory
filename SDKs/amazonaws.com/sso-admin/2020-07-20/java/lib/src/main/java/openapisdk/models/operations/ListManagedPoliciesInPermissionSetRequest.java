package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListManagedPoliciesInPermissionSetRequest {
    public ListManagedPoliciesInPermissionSetQueryParams queryParams;
    public ListManagedPoliciesInPermissionSetRequest withQueryParams(ListManagedPoliciesInPermissionSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListManagedPoliciesInPermissionSetHeaders headers;
    public ListManagedPoliciesInPermissionSetRequest withHeaders(ListManagedPoliciesInPermissionSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListManagedPoliciesInPermissionSetRequest request;
    public ListManagedPoliciesInPermissionSetRequest withRequest(openapisdk.models.shared.ListManagedPoliciesInPermissionSetRequest request) {
        this.request = request;
        return this;
    }
}