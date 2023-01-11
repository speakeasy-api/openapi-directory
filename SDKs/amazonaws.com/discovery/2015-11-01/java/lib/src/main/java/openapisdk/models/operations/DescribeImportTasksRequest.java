package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeImportTasksRequest {
    public DescribeImportTasksQueryParams queryParams;
    public DescribeImportTasksRequest withQueryParams(DescribeImportTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeImportTasksHeaders headers;
    public DescribeImportTasksRequest withHeaders(DescribeImportTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeImportTasksRequest request;
    public DescribeImportTasksRequest withRequest(openapisdk.models.shared.DescribeImportTasksRequest request) {
        this.request = request;
        return this;
    }
}