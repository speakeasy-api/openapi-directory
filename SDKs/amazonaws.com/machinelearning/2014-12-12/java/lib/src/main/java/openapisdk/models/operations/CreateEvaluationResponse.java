package openapisdk.models.operations;



public class CreateEvaluationResponse {
    public String contentType;
    public CreateEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEvaluationOutput createEvaluationOutput;
    public CreateEvaluationResponse withCreateEvaluationOutput(openapisdk.models.shared.CreateEvaluationOutput createEvaluationOutput) {
        this.createEvaluationOutput = createEvaluationOutput;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateEvaluationResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public CreateEvaluationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public CreateEvaluationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public CreateEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}