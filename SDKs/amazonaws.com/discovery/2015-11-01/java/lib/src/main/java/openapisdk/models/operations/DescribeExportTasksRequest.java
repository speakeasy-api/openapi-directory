package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeExportTasksRequest {
    public DescribeExportTasksHeaders headers;
    public DescribeExportTasksRequest withHeaders(DescribeExportTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeExportTasksRequest request;
    public DescribeExportTasksRequest withRequest(openapisdk.models.shared.DescribeExportTasksRequest request) {
        this.request = request;
        return this;
    }
}