package openapisdk.models.operations;



public class DescribeWorkspaceDirectoriesResponse {
    public String contentType;
    public DescribeWorkspaceDirectoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorkspaceDirectoriesResult describeWorkspaceDirectoriesResult;
    public DescribeWorkspaceDirectoriesResponse withDescribeWorkspaceDirectoriesResult(openapisdk.models.shared.DescribeWorkspaceDirectoriesResult describeWorkspaceDirectoriesResult) {
        this.describeWorkspaceDirectoriesResult = describeWorkspaceDirectoriesResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DescribeWorkspaceDirectoriesResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Long statusCode;
    public DescribeWorkspaceDirectoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}