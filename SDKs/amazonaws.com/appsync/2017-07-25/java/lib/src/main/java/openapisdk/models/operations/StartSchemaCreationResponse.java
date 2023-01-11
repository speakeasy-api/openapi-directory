package openapisdk.models.operations;



public class StartSchemaCreationResponse {
    public Object badRequestException;
    public StartSchemaCreationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public StartSchemaCreationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public StartSchemaCreationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public StartSchemaCreationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public StartSchemaCreationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.StartSchemaCreationResponse startSchemaCreationResponse;
    public StartSchemaCreationResponse withStartSchemaCreationResponse(openapisdk.models.shared.StartSchemaCreationResponse startSchemaCreationResponse) {
        this.startSchemaCreationResponse = startSchemaCreationResponse;
        return this;
    }
    public Long statusCode;
    public StartSchemaCreationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public StartSchemaCreationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}