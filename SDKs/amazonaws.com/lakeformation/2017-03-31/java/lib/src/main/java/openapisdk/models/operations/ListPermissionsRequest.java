package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPermissionsRequest {
    public ListPermissionsQueryParams queryParams;
    public ListPermissionsRequest withQueryParams(ListPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPermissionsHeaders headers;
    public ListPermissionsRequest withHeaders(ListPermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPermissionsRequest request;
    public ListPermissionsRequest withRequest(openapisdk.models.shared.ListPermissionsRequest request) {
        this.request = request;
        return this;
    }
}