package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBackupsRequest {
    public DescribeBackupsQueryParams queryParams;
    public DescribeBackupsRequest withQueryParams(DescribeBackupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeBackupsHeaders headers;
    public DescribeBackupsRequest withHeaders(DescribeBackupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeBackupsRequest request;
    public DescribeBackupsRequest withRequest(openapisdk.models.shared.DescribeBackupsRequest request) {
        this.request = request;
        return this;
    }
}