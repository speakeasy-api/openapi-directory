package openapisdk.models.operations;



public class DescribeWorkspaceImagesResponse {
    public Object accessDeniedException;
    public DescribeWorkspaceImagesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeWorkspaceImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorkspaceImagesResult describeWorkspaceImagesResult;
    public DescribeWorkspaceImagesResponse withDescribeWorkspaceImagesResult(openapisdk.models.shared.DescribeWorkspaceImagesResult describeWorkspaceImagesResult) {
        this.describeWorkspaceImagesResult = describeWorkspaceImagesResult;
        return this;
    }
    public Long statusCode;
    public DescribeWorkspaceImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}