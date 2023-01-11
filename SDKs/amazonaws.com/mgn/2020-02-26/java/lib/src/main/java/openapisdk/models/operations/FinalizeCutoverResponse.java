package openapisdk.models.operations;



public class FinalizeCutoverResponse {
    public Object conflictException;
    public FinalizeCutoverResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public FinalizeCutoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public FinalizeCutoverResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SourceServer sourceServer;
    public FinalizeCutoverResponse withSourceServer(openapisdk.models.shared.SourceServer sourceServer) {
        this.sourceServer = sourceServer;
        return this;
    }
    public Long statusCode;
    public FinalizeCutoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public FinalizeCutoverResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public FinalizeCutoverResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}