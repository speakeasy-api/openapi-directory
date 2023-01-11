package openapisdk.models.operations;



public class DetachCertificateFromDistributionResponse {
    public Object accessDeniedException;
    public DetachCertificateFromDistributionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DetachCertificateFromDistributionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetachCertificateFromDistributionResult detachCertificateFromDistributionResult;
    public DetachCertificateFromDistributionResponse withDetachCertificateFromDistributionResult(openapisdk.models.shared.DetachCertificateFromDistributionResult detachCertificateFromDistributionResult) {
        this.detachCertificateFromDistributionResult = detachCertificateFromDistributionResult;
        return this;
    }
    public Object invalidInputException;
    public DetachCertificateFromDistributionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DetachCertificateFromDistributionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DetachCertificateFromDistributionResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DetachCertificateFromDistributionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DetachCertificateFromDistributionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DetachCertificateFromDistributionResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}