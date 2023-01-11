package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetReportGroupsRequest {
    public BatchGetReportGroupsHeaders headers;
    public BatchGetReportGroupsRequest withHeaders(BatchGetReportGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetReportGroupsInput request;
    public BatchGetReportGroupsRequest withRequest(openapisdk.models.shared.BatchGetReportGroupsInput request) {
        this.request = request;
        return this;
    }
}