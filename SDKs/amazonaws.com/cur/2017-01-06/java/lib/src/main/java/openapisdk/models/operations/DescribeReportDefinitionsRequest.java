package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReportDefinitionsRequest {
    public DescribeReportDefinitionsQueryParams queryParams;
    public DescribeReportDefinitionsRequest withQueryParams(DescribeReportDefinitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeReportDefinitionsHeaders headers;
    public DescribeReportDefinitionsRequest withHeaders(DescribeReportDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeReportDefinitionsRequest request;
    public DescribeReportDefinitionsRequest withRequest(openapisdk.models.shared.DescribeReportDefinitionsRequest request) {
        this.request = request;
        return this;
    }
}