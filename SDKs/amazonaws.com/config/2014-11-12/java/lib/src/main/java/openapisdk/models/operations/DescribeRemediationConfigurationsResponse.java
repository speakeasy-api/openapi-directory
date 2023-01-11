package openapisdk.models.operations;



public class DescribeRemediationConfigurationsResponse {
    public String contentType;
    public DescribeRemediationConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRemediationConfigurationsResponse describeRemediationConfigurationsResponse;
    public DescribeRemediationConfigurationsResponse withDescribeRemediationConfigurationsResponse(openapisdk.models.shared.DescribeRemediationConfigurationsResponse describeRemediationConfigurationsResponse) {
        this.describeRemediationConfigurationsResponse = describeRemediationConfigurationsResponse;
        return this;
    }
    public Long statusCode;
    public DescribeRemediationConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}