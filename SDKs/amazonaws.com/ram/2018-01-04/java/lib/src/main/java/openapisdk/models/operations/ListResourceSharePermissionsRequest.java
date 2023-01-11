package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourceSharePermissionsRequest {
    public ListResourceSharePermissionsQueryParams queryParams;
    public ListResourceSharePermissionsRequest withQueryParams(ListResourceSharePermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResourceSharePermissionsHeaders headers;
    public ListResourceSharePermissionsRequest withHeaders(ListResourceSharePermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListResourceSharePermissionsRequestBody request;
    public ListResourceSharePermissionsRequest withRequest(ListResourceSharePermissionsRequestBody request) {
        this.request = request;
        return this;
    }
}