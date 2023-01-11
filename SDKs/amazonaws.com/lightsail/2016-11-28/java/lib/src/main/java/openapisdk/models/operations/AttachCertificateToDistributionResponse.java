package openapisdk.models.operations;



public class AttachCertificateToDistributionResponse {
    public Object accessDeniedException;
    public AttachCertificateToDistributionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AttachCertificateToDistributionResult attachCertificateToDistributionResult;
    public AttachCertificateToDistributionResponse withAttachCertificateToDistributionResult(openapisdk.models.shared.AttachCertificateToDistributionResult attachCertificateToDistributionResult) {
        this.attachCertificateToDistributionResult = attachCertificateToDistributionResult;
        return this;
    }
    public String contentType;
    public AttachCertificateToDistributionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public AttachCertificateToDistributionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public AttachCertificateToDistributionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public AttachCertificateToDistributionResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public AttachCertificateToDistributionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AttachCertificateToDistributionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public AttachCertificateToDistributionResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}