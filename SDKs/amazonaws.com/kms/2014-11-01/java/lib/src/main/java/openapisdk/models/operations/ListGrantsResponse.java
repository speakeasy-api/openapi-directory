package openapisdk.models.operations;



public class ListGrantsResponse {
    public String contentType;
    public ListGrantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public ListGrantsResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidArnException;
    public ListGrantsResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidGrantIdException;
    public ListGrantsResponse withInvalidGrantIdException(Object invalidGrantIdException) {
        this.invalidGrantIdException = invalidGrantIdException;
        return this;
    }
    public Object invalidMarkerException;
    public ListGrantsResponse withInvalidMarkerException(Object invalidMarkerException) {
        this.invalidMarkerException = invalidMarkerException;
        return this;
    }
    public Object kmsInternalException;
    public ListGrantsResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public ListGrantsResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public openapisdk.models.shared.ListGrantsResponse listGrantsResponse;
    public ListGrantsResponse withListGrantsResponse(openapisdk.models.shared.ListGrantsResponse listGrantsResponse) {
        this.listGrantsResponse = listGrantsResponse;
        return this;
    }
    public Object notFoundException;
    public ListGrantsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListGrantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}