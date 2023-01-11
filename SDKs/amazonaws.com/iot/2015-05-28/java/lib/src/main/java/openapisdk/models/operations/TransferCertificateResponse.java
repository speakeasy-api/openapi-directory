package openapisdk.models.operations;



public class TransferCertificateResponse {
    public Object certificateStateException;
    public TransferCertificateResponse withCertificateStateException(Object certificateStateException) {
        this.certificateStateException = certificateStateException;
        return this;
    }
    public String contentType;
    public TransferCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public TransferCertificateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public TransferCertificateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public TransferCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public TransferCertificateResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public TransferCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public TransferCertificateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.TransferCertificateResponse transferCertificateResponse;
    public TransferCertificateResponse withTransferCertificateResponse(openapisdk.models.shared.TransferCertificateResponse transferCertificateResponse) {
        this.transferCertificateResponse = transferCertificateResponse;
        return this;
    }
    public Object transferConflictException;
    public TransferCertificateResponse withTransferConflictException(Object transferConflictException) {
        this.transferConflictException = transferConflictException;
        return this;
    }
    public Object unauthorizedException;
    public TransferCertificateResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}