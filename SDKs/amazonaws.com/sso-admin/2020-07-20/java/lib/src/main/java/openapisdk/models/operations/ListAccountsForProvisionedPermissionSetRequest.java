package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAccountsForProvisionedPermissionSetRequest {
    public ListAccountsForProvisionedPermissionSetQueryParams queryParams;
    public ListAccountsForProvisionedPermissionSetRequest withQueryParams(ListAccountsForProvisionedPermissionSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAccountsForProvisionedPermissionSetHeaders headers;
    public ListAccountsForProvisionedPermissionSetRequest withHeaders(ListAccountsForProvisionedPermissionSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAccountsForProvisionedPermissionSetRequest request;
    public ListAccountsForProvisionedPermissionSetRequest withRequest(openapisdk.models.shared.ListAccountsForProvisionedPermissionSetRequest request) {
        this.request = request;
        return this;
    }
}