package openapisdk.models.operations;



public class DeleteTagOptionResponse {
    public String contentType;
    public DeleteTagOptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTagOptionOutput;
    public DeleteTagOptionResponse withDeleteTagOptionOutput(java.util.Map<String, Object> deleteTagOptionOutput) {
        this.deleteTagOptionOutput = deleteTagOptionOutput;
        return this;
    }
    public Object resourceInUseException;
    public DeleteTagOptionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteTagOptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteTagOptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public DeleteTagOptionResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
}