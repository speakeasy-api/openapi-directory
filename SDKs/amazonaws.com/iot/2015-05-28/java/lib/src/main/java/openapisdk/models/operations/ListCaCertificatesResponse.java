package openapisdk.models.operations;



public class ListCaCertificatesResponse {
    public String contentType;
    public ListCaCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListCaCertificatesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListCaCertificatesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListCaCertificatesResponse listCACertificatesResponse;
    public ListCaCertificatesResponse withListCaCertificatesResponse(openapisdk.models.shared.ListCaCertificatesResponse listCACertificatesResponse) {
        this.listCACertificatesResponse = listCACertificatesResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListCaCertificatesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListCaCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListCaCertificatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListCaCertificatesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}