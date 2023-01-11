package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCallAnalyticsJobsRequest {
    public ListCallAnalyticsJobsQueryParams queryParams;
    public ListCallAnalyticsJobsRequest withQueryParams(ListCallAnalyticsJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCallAnalyticsJobsHeaders headers;
    public ListCallAnalyticsJobsRequest withHeaders(ListCallAnalyticsJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCallAnalyticsJobsRequest request;
    public ListCallAnalyticsJobsRequest withRequest(openapisdk.models.shared.ListCallAnalyticsJobsRequest request) {
        this.request = request;
        return this;
    }
}