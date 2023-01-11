package openapisdk.models.operations;



public class DescribeOperatingSystemsResponse {
    public String contentType;
    public DescribeOperatingSystemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeOperatingSystemsResponse describeOperatingSystemsResponse;
    public DescribeOperatingSystemsResponse withDescribeOperatingSystemsResponse(openapisdk.models.shared.DescribeOperatingSystemsResponse describeOperatingSystemsResponse) {
        this.describeOperatingSystemsResponse = describeOperatingSystemsResponse;
        return this;
    }
    public Long statusCode;
    public DescribeOperatingSystemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}