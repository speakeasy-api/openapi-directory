package openapisdk.models.operations;



public class DescribeWorkspaceBundlesResponse {
    public String contentType;
    public DescribeWorkspaceBundlesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorkspaceBundlesResult describeWorkspaceBundlesResult;
    public DescribeWorkspaceBundlesResponse withDescribeWorkspaceBundlesResult(openapisdk.models.shared.DescribeWorkspaceBundlesResult describeWorkspaceBundlesResult) {
        this.describeWorkspaceBundlesResult = describeWorkspaceBundlesResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DescribeWorkspaceBundlesResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Long statusCode;
    public DescribeWorkspaceBundlesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}