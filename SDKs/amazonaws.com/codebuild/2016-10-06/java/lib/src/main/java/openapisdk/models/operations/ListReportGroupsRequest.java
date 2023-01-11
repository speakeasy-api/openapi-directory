package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListReportGroupsRequest {
    public ListReportGroupsQueryParams queryParams;
    public ListReportGroupsRequest withQueryParams(ListReportGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListReportGroupsHeaders headers;
    public ListReportGroupsRequest withHeaders(ListReportGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListReportGroupsInput request;
    public ListReportGroupsRequest withRequest(openapisdk.models.shared.ListReportGroupsInput request) {
        this.request = request;
        return this;
    }
}