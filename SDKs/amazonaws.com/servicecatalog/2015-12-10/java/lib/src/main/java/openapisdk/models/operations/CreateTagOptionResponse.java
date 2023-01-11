package openapisdk.models.operations;



public class CreateTagOptionResponse {
    public String contentType;
    public CreateTagOptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTagOptionOutput createTagOptionOutput;
    public CreateTagOptionResponse withCreateTagOptionOutput(openapisdk.models.shared.CreateTagOptionOutput createTagOptionOutput) {
        this.createTagOptionOutput = createTagOptionOutput;
        return this;
    }
    public Object duplicateResourceException;
    public CreateTagOptionResponse withDuplicateResourceException(Object duplicateResourceException) {
        this.duplicateResourceException = duplicateResourceException;
        return this;
    }
    public Object limitExceededException;
    public CreateTagOptionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateTagOptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public CreateTagOptionResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
}