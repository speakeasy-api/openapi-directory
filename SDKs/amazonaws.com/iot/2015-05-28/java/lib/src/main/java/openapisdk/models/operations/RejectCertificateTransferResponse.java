package openapisdk.models.operations;



public class RejectCertificateTransferResponse {
    public String contentType;
    public RejectCertificateTransferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public RejectCertificateTransferResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public RejectCertificateTransferResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public RejectCertificateTransferResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public RejectCertificateTransferResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public RejectCertificateTransferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RejectCertificateTransferResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object transferAlreadyCompletedException;
    public RejectCertificateTransferResponse withTransferAlreadyCompletedException(Object transferAlreadyCompletedException) {
        this.transferAlreadyCompletedException = transferAlreadyCompletedException;
        return this;
    }
    public Object unauthorizedException;
    public RejectCertificateTransferResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}