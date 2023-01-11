package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeExportConfigurationsRequest {
    public DescribeExportConfigurationsHeaders headers;
    public DescribeExportConfigurationsRequest withHeaders(DescribeExportConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeExportConfigurationsRequest request;
    public DescribeExportConfigurationsRequest withRequest(openapisdk.models.shared.DescribeExportConfigurationsRequest request) {
        this.request = request;
        return this;
    }
}