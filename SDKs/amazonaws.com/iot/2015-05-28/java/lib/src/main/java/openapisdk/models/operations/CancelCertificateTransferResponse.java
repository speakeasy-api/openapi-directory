package openapisdk.models.operations;



public class CancelCertificateTransferResponse {
    public String contentType;
    public CancelCertificateTransferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public CancelCertificateTransferResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CancelCertificateTransferResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelCertificateTransferResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CancelCertificateTransferResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CancelCertificateTransferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelCertificateTransferResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object transferAlreadyCompletedException;
    public CancelCertificateTransferResponse withTransferAlreadyCompletedException(Object transferAlreadyCompletedException) {
        this.transferAlreadyCompletedException = transferAlreadyCompletedException;
        return this;
    }
    public Object unauthorizedException;
    public CancelCertificateTransferResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}