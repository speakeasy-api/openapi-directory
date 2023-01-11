package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListReportsForReportGroupRequest {
    public ListReportsForReportGroupQueryParams queryParams;
    public ListReportsForReportGroupRequest withQueryParams(ListReportsForReportGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListReportsForReportGroupHeaders headers;
    public ListReportsForReportGroupRequest withHeaders(ListReportsForReportGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListReportsForReportGroupInput request;
    public ListReportsForReportGroupRequest withRequest(openapisdk.models.shared.ListReportsForReportGroupInput request) {
        this.request = request;
        return this;
    }
}