package openapisdk.models.operations;



public class DescribeWorkspaceImagePermissionsResponse {
    public Object accessDeniedException;
    public DescribeWorkspaceImagePermissionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeWorkspaceImagePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorkspaceImagePermissionsResult describeWorkspaceImagePermissionsResult;
    public DescribeWorkspaceImagePermissionsResponse withDescribeWorkspaceImagePermissionsResult(openapisdk.models.shared.DescribeWorkspaceImagePermissionsResult describeWorkspaceImagePermissionsResult) {
        this.describeWorkspaceImagePermissionsResult = describeWorkspaceImagePermissionsResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DescribeWorkspaceImagePermissionsResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeWorkspaceImagePermissionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeWorkspaceImagePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}