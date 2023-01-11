package openapisdk.models.operations;



public class AcceptCertificateTransferResponse {
    public String contentType;
    public AcceptCertificateTransferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public AcceptCertificateTransferResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public AcceptCertificateTransferResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public AcceptCertificateTransferResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public AcceptCertificateTransferResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public AcceptCertificateTransferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AcceptCertificateTransferResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object transferAlreadyCompletedException;
    public AcceptCertificateTransferResponse withTransferAlreadyCompletedException(Object transferAlreadyCompletedException) {
        this.transferAlreadyCompletedException = transferAlreadyCompletedException;
        return this;
    }
    public Object unauthorizedException;
    public AcceptCertificateTransferResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}