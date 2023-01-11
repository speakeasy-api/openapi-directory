package openapisdk.models.operations;



public class CreateAliasResponse {
    public Object alreadyExistsException;
    public CreateAliasResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public CreateAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public CreateAliasResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidAliasNameException;
    public CreateAliasResponse withInvalidAliasNameException(Object invalidAliasNameException) {
        this.invalidAliasNameException = invalidAliasNameException;
        return this;
    }
    public Object kmsInternalException;
    public CreateAliasResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public CreateAliasResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object limitExceededException;
    public CreateAliasResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateAliasResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}