package openapisdk.models.operations;



public class ListOutgoingCertificatesResponse {
    public String contentType;
    public ListOutgoingCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListOutgoingCertificatesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListOutgoingCertificatesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListOutgoingCertificatesResponse listOutgoingCertificatesResponse;
    public ListOutgoingCertificatesResponse withListOutgoingCertificatesResponse(openapisdk.models.shared.ListOutgoingCertificatesResponse listOutgoingCertificatesResponse) {
        this.listOutgoingCertificatesResponse = listOutgoingCertificatesResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListOutgoingCertificatesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListOutgoingCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListOutgoingCertificatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListOutgoingCertificatesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}