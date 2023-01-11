package openapisdk.models.operations;



public class CreateReturnShippingLabelResponse {
    public Object conflictException;
    public CreateReturnShippingLabelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateReturnShippingLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateReturnShippingLabelResult createReturnShippingLabelResult;
    public CreateReturnShippingLabelResponse withCreateReturnShippingLabelResult(openapisdk.models.shared.CreateReturnShippingLabelResult createReturnShippingLabelResult) {
        this.createReturnShippingLabelResult = createReturnShippingLabelResult;
        return this;
    }
    public Object invalidInputCombinationException;
    public CreateReturnShippingLabelResponse withInvalidInputCombinationException(Object invalidInputCombinationException) {
        this.invalidInputCombinationException = invalidInputCombinationException;
        return this;
    }
    public Object invalidJobStateException;
    public CreateReturnShippingLabelResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object invalidResourceException;
    public CreateReturnShippingLabelResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Object returnShippingLabelAlreadyExistsException;
    public CreateReturnShippingLabelResponse withReturnShippingLabelAlreadyExistsException(Object returnShippingLabelAlreadyExistsException) {
        this.returnShippingLabelAlreadyExistsException = returnShippingLabelAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateReturnShippingLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}