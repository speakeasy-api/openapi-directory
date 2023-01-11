package openapisdk.models.operations;



public class ChangeServerLifeCycleStateResponse {
    public Object conflictException;
    public ChangeServerLifeCycleStateResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ChangeServerLifeCycleStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public ChangeServerLifeCycleStateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SourceServer sourceServer;
    public ChangeServerLifeCycleStateResponse withSourceServer(openapisdk.models.shared.SourceServer sourceServer) {
        this.sourceServer = sourceServer;
        return this;
    }
    public Long statusCode;
    public ChangeServerLifeCycleStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public ChangeServerLifeCycleStateResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public ChangeServerLifeCycleStateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}