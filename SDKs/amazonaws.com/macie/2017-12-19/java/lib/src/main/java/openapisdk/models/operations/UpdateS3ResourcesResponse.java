package openapisdk.models.operations;



public class UpdateS3ResourcesResponse {
    public Object accessDeniedException;
    public UpdateS3ResourcesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateS3ResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateS3ResourcesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public UpdateS3ResourcesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public UpdateS3ResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateS3ResourcesResult updateS3ResourcesResult;
    public UpdateS3ResourcesResponse withUpdateS3ResourcesResult(openapisdk.models.shared.UpdateS3ResourcesResult updateS3ResourcesResult) {
        this.updateS3ResourcesResult = updateS3ResourcesResult;
        return this;
    }
}