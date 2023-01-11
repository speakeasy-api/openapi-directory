package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGameServerGroupsRequest {
    public ListGameServerGroupsQueryParams queryParams;
    public ListGameServerGroupsRequest withQueryParams(ListGameServerGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGameServerGroupsHeaders headers;
    public ListGameServerGroupsRequest withHeaders(ListGameServerGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListGameServerGroupsInput request;
    public ListGameServerGroupsRequest withRequest(openapisdk.models.shared.ListGameServerGroupsInput request) {
        this.request = request;
        return this;
    }
}