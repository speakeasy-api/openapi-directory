package openapisdk.models.operations;



public class CreateOrderResponse {
    public Object accessDeniedException;
    public CreateOrderResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateOrderResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateOrderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateOrderOutput createOrderOutput;
    public CreateOrderResponse withCreateOrderOutput(openapisdk.models.shared.CreateOrderOutput createOrderOutput) {
        this.createOrderOutput = createOrderOutput;
        return this;
    }
    public Object internalServerException;
    public CreateOrderResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object notFoundException;
    public CreateOrderResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateOrderResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateOrderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateOrderResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}