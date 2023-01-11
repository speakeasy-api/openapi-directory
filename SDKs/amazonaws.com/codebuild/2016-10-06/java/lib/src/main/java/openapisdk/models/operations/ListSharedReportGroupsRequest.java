package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSharedReportGroupsRequest {
    public ListSharedReportGroupsQueryParams queryParams;
    public ListSharedReportGroupsRequest withQueryParams(ListSharedReportGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSharedReportGroupsHeaders headers;
    public ListSharedReportGroupsRequest withHeaders(ListSharedReportGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSharedReportGroupsInput request;
    public ListSharedReportGroupsRequest withRequest(openapisdk.models.shared.ListSharedReportGroupsInput request) {
        this.request = request;
        return this;
    }
}