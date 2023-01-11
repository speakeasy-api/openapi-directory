package openapisdk.models.operations;



public class AssociateTagOptionWithResourceResponse {
    public java.util.Map<String, Object> associateTagOptionWithResourceOutput;
    public AssociateTagOptionWithResourceResponse withAssociateTagOptionWithResourceOutput(java.util.Map<String, Object> associateTagOptionWithResourceOutput) {
        this.associateTagOptionWithResourceOutput = associateTagOptionWithResourceOutput;
        return this;
    }
    public String contentType;
    public AssociateTagOptionWithResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateResourceException;
    public AssociateTagOptionWithResourceResponse withDuplicateResourceException(Object duplicateResourceException) {
        this.duplicateResourceException = duplicateResourceException;
        return this;
    }
    public Object invalidParametersException;
    public AssociateTagOptionWithResourceResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object invalidStateException;
    public AssociateTagOptionWithResourceResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object limitExceededException;
    public AssociateTagOptionWithResourceResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateTagOptionWithResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateTagOptionWithResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public AssociateTagOptionWithResourceResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
}