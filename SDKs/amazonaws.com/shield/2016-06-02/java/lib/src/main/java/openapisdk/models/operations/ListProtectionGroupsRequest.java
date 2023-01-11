package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProtectionGroupsRequest {
    public ListProtectionGroupsQueryParams queryParams;
    public ListProtectionGroupsRequest withQueryParams(ListProtectionGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProtectionGroupsHeaders headers;
    public ListProtectionGroupsRequest withHeaders(ListProtectionGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListProtectionGroupsRequest request;
    public ListProtectionGroupsRequest withRequest(openapisdk.models.shared.ListProtectionGroupsRequest request) {
        this.request = request;
        return this;
    }
}