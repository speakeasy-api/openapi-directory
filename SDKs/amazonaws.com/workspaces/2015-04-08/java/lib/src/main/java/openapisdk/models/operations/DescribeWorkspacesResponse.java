package openapisdk.models.operations;



public class DescribeWorkspacesResponse {
    public String contentType;
    public DescribeWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorkspacesResult describeWorkspacesResult;
    public DescribeWorkspacesResponse withDescribeWorkspacesResult(openapisdk.models.shared.DescribeWorkspacesResult describeWorkspacesResult) {
        this.describeWorkspacesResult = describeWorkspacesResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DescribeWorkspacesResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceUnavailableException;
    public DescribeWorkspacesResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}