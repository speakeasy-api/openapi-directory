package openapisdk.models.operations;



public class AssociateS3ResourcesResponse {
    public Object accessDeniedException;
    public AssociateS3ResourcesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AssociateS3ResourcesResult associateS3ResourcesResult;
    public AssociateS3ResourcesResponse withAssociateS3ResourcesResult(openapisdk.models.shared.AssociateS3ResourcesResult associateS3ResourcesResult) {
        this.associateS3ResourcesResult = associateS3ResourcesResult;
        return this;
    }
    public String contentType;
    public AssociateS3ResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public AssociateS3ResourcesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public AssociateS3ResourcesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public AssociateS3ResourcesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public AssociateS3ResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}