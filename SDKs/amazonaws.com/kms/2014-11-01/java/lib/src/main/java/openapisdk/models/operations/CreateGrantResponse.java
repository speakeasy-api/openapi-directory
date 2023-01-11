package openapisdk.models.operations;



public class CreateGrantResponse {
    public String contentType;
    public CreateGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGrantResponse createGrantResponse;
    public CreateGrantResponse withCreateGrantResponse(openapisdk.models.shared.CreateGrantResponse createGrantResponse) {
        this.createGrantResponse = createGrantResponse;
        return this;
    }
    public Object dependencyTimeoutException;
    public CreateGrantResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object disabledException;
    public CreateGrantResponse withDisabledException(Object disabledException) {
        this.disabledException = disabledException;
        return this;
    }
    public Object invalidArnException;
    public CreateGrantResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidGrantTokenException;
    public CreateGrantResponse withInvalidGrantTokenException(Object invalidGrantTokenException) {
        this.invalidGrantTokenException = invalidGrantTokenException;
        return this;
    }
    public Object kmsInternalException;
    public CreateGrantResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public CreateGrantResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object limitExceededException;
    public CreateGrantResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateGrantResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}