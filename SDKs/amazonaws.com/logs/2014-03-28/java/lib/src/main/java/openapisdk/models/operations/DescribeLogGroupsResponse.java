package openapisdk.models.operations;



public class DescribeLogGroupsResponse {
    public String contentType;
    public DescribeLogGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLogGroupsResponse describeLogGroupsResponse;
    public DescribeLogGroupsResponse withDescribeLogGroupsResponse(openapisdk.models.shared.DescribeLogGroupsResponse describeLogGroupsResponse) {
        this.describeLogGroupsResponse = describeLogGroupsResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeLogGroupsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeLogGroupsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeLogGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}