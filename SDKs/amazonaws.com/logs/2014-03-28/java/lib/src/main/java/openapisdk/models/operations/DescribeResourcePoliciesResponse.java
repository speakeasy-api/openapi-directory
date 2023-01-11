package openapisdk.models.operations;



public class DescribeResourcePoliciesResponse {
    public String contentType;
    public DescribeResourcePoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeResourcePoliciesResponse describeResourcePoliciesResponse;
    public DescribeResourcePoliciesResponse withDescribeResourcePoliciesResponse(openapisdk.models.shared.DescribeResourcePoliciesResponse describeResourcePoliciesResponse) {
        this.describeResourcePoliciesResponse = describeResourcePoliciesResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeResourcePoliciesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeResourcePoliciesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeResourcePoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}