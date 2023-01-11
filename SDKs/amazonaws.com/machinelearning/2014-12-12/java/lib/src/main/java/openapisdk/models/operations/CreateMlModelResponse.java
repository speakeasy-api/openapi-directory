package openapisdk.models.operations;



public class CreateMlModelResponse {
    public String contentType;
    public CreateMlModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateMlModelOutput createMLModelOutput;
    public CreateMlModelResponse withCreateMlModelOutput(openapisdk.models.shared.CreateMlModelOutput createMLModelOutput) {
        this.createMLModelOutput = createMLModelOutput;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateMlModelResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public CreateMlModelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public CreateMlModelResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public CreateMlModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}