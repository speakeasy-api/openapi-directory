package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourcesInProtectionGroupRequest {
    public ListResourcesInProtectionGroupQueryParams queryParams;
    public ListResourcesInProtectionGroupRequest withQueryParams(ListResourcesInProtectionGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResourcesInProtectionGroupHeaders headers;
    public ListResourcesInProtectionGroupRequest withHeaders(ListResourcesInProtectionGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResourcesInProtectionGroupRequest request;
    public ListResourcesInProtectionGroupRequest withRequest(openapisdk.models.shared.ListResourcesInProtectionGroupRequest request) {
        this.request = request;
        return this;
    }
}