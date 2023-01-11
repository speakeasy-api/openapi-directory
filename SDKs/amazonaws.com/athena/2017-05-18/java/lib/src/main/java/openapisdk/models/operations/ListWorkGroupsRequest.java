package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkGroupsRequest {
    public ListWorkGroupsQueryParams queryParams;
    public ListWorkGroupsRequest withQueryParams(ListWorkGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkGroupsHeaders headers;
    public ListWorkGroupsRequest withHeaders(ListWorkGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListWorkGroupsInput request;
    public ListWorkGroupsRequest withRequest(openapisdk.models.shared.ListWorkGroupsInput request) {
        this.request = request;
        return this;
    }
}