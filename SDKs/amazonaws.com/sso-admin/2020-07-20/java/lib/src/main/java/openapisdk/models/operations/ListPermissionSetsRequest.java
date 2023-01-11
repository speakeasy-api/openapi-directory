package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPermissionSetsRequest {
    public ListPermissionSetsQueryParams queryParams;
    public ListPermissionSetsRequest withQueryParams(ListPermissionSetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPermissionSetsHeaders headers;
    public ListPermissionSetsRequest withHeaders(ListPermissionSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPermissionSetsRequest request;
    public ListPermissionSetsRequest withRequest(openapisdk.models.shared.ListPermissionSetsRequest request) {
        this.request = request;
        return this;
    }
}