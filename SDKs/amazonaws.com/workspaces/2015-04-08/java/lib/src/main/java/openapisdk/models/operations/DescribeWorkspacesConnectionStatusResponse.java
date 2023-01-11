package openapisdk.models.operations;



public class DescribeWorkspacesConnectionStatusResponse {
    public String contentType;
    public DescribeWorkspacesConnectionStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorkspacesConnectionStatusResult describeWorkspacesConnectionStatusResult;
    public DescribeWorkspacesConnectionStatusResponse withDescribeWorkspacesConnectionStatusResult(openapisdk.models.shared.DescribeWorkspacesConnectionStatusResult describeWorkspacesConnectionStatusResult) {
        this.describeWorkspacesConnectionStatusResult = describeWorkspacesConnectionStatusResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DescribeWorkspacesConnectionStatusResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Long statusCode;
    public DescribeWorkspacesConnectionStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}