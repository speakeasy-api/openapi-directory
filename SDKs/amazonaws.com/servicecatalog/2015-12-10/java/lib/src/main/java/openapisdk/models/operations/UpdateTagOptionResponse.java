package openapisdk.models.operations;



public class UpdateTagOptionResponse {
    public String contentType;
    public UpdateTagOptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateResourceException;
    public UpdateTagOptionResponse withDuplicateResourceException(Object duplicateResourceException) {
        this.duplicateResourceException = duplicateResourceException;
        return this;
    }
    public Object invalidParametersException;
    public UpdateTagOptionResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateTagOptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateTagOptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public UpdateTagOptionResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
    public openapisdk.models.shared.UpdateTagOptionOutput updateTagOptionOutput;
    public UpdateTagOptionResponse withUpdateTagOptionOutput(openapisdk.models.shared.UpdateTagOptionOutput updateTagOptionOutput) {
        this.updateTagOptionOutput = updateTagOptionOutput;
        return this;
    }
}