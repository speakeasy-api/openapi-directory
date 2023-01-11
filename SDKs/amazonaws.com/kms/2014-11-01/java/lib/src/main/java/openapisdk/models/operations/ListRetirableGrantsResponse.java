package openapisdk.models.operations;



public class ListRetirableGrantsResponse {
    public String contentType;
    public ListRetirableGrantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public ListRetirableGrantsResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidArnException;
    public ListRetirableGrantsResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidMarkerException;
    public ListRetirableGrantsResponse withInvalidMarkerException(Object invalidMarkerException) {
        this.invalidMarkerException = invalidMarkerException;
        return this;
    }
    public Object kmsInternalException;
    public ListRetirableGrantsResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public openapisdk.models.shared.ListGrantsResponse listGrantsResponse;
    public ListRetirableGrantsResponse withListGrantsResponse(openapisdk.models.shared.ListGrantsResponse listGrantsResponse) {
        this.listGrantsResponse = listGrantsResponse;
        return this;
    }
    public Object notFoundException;
    public ListRetirableGrantsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListRetirableGrantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}