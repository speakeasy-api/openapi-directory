package openapisdk.models.operations;



public class DescribeEndpointSettingsResponse {
    public String contentType;
    public DescribeEndpointSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEndpointSettingsResponse describeEndpointSettingsResponse;
    public DescribeEndpointSettingsResponse withDescribeEndpointSettingsResponse(openapisdk.models.shared.DescribeEndpointSettingsResponse describeEndpointSettingsResponse) {
        this.describeEndpointSettingsResponse = describeEndpointSettingsResponse;
        return this;
    }
    public Long statusCode;
    public DescribeEndpointSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}