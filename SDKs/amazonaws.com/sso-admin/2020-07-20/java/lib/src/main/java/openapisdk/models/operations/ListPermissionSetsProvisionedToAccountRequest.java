package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPermissionSetsProvisionedToAccountRequest {
    public ListPermissionSetsProvisionedToAccountQueryParams queryParams;
    public ListPermissionSetsProvisionedToAccountRequest withQueryParams(ListPermissionSetsProvisionedToAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPermissionSetsProvisionedToAccountHeaders headers;
    public ListPermissionSetsProvisionedToAccountRequest withHeaders(ListPermissionSetsProvisionedToAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPermissionSetsProvisionedToAccountRequest request;
    public ListPermissionSetsProvisionedToAccountRequest withRequest(openapisdk.models.shared.ListPermissionSetsProvisionedToAccountRequest request) {
        this.request = request;
        return this;
    }
}