package openapisdk.models.operations;



public class ListS3ResourcesResponse {
    public Object accessDeniedException;
    public ListS3ResourcesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListS3ResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListS3ResourcesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public ListS3ResourcesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListS3ResourcesResult listS3ResourcesResult;
    public ListS3ResourcesResponse withListS3ResourcesResult(openapisdk.models.shared.ListS3ResourcesResult listS3ResourcesResult) {
        this.listS3ResourcesResult = listS3ResourcesResult;
        return this;
    }
    public Long statusCode;
    public ListS3ResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}