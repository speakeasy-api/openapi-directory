package openapisdk.models.operations;



public class ListCertificatesByCaResponse {
    public String contentType;
    public ListCertificatesByCaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListCertificatesByCaResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListCertificatesByCaResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListCertificatesByCaResponse listCertificatesByCAResponse;
    public ListCertificatesByCaResponse withListCertificatesByCaResponse(openapisdk.models.shared.ListCertificatesByCaResponse listCertificatesByCAResponse) {
        this.listCertificatesByCAResponse = listCertificatesByCAResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListCertificatesByCaResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListCertificatesByCaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListCertificatesByCaResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListCertificatesByCaResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}