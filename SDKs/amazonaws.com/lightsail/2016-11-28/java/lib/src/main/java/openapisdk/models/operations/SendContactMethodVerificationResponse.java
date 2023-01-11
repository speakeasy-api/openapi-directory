package openapisdk.models.operations;



public class SendContactMethodVerificationResponse {
    public Object accessDeniedException;
    public SendContactMethodVerificationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SendContactMethodVerificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public SendContactMethodVerificationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public SendContactMethodVerificationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public SendContactMethodVerificationResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public openapisdk.models.shared.SendContactMethodVerificationResult sendContactMethodVerificationResult;
    public SendContactMethodVerificationResponse withSendContactMethodVerificationResult(openapisdk.models.shared.SendContactMethodVerificationResult sendContactMethodVerificationResult) {
        this.sendContactMethodVerificationResult = sendContactMethodVerificationResult;
        return this;
    }
    public Object serviceException;
    public SendContactMethodVerificationResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public SendContactMethodVerificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public SendContactMethodVerificationResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}