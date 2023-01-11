package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMailboxExportJobRequest {
    public DescribeMailboxExportJobHeaders headers;
    public DescribeMailboxExportJobRequest withHeaders(DescribeMailboxExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeMailboxExportJobRequest request;
    public DescribeMailboxExportJobRequest withRequest(openapisdk.models.shared.DescribeMailboxExportJobRequest request) {
        this.request = request;
        return this;
    }
}