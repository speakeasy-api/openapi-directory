package openapisdk.models.operations;



public class DeleteAliasResponse {
    public String contentType;
    public DeleteAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public DeleteAliasResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object kmsInternalException;
    public DeleteAliasResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public DeleteAliasResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object notFoundException;
    public DeleteAliasResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}