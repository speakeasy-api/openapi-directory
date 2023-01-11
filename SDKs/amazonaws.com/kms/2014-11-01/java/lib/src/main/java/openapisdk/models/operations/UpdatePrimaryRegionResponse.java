package openapisdk.models.operations;



public class UpdatePrimaryRegionResponse {
    public String contentType;
    public UpdatePrimaryRegionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object disabledException;
    public UpdatePrimaryRegionResponse withDisabledException(Object disabledException) {
        this.disabledException = disabledException;
        return this;
    }
    public Object invalidArnException;
    public UpdatePrimaryRegionResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object kmsInternalException;
    public UpdatePrimaryRegionResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public UpdatePrimaryRegionResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object notFoundException;
    public UpdatePrimaryRegionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdatePrimaryRegionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public UpdatePrimaryRegionResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}