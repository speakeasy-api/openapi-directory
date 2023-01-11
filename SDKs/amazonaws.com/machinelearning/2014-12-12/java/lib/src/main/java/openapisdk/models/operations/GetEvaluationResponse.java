package openapisdk.models.operations;



public class GetEvaluationResponse {
    public String contentType;
    public GetEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEvaluationOutput getEvaluationOutput;
    public GetEvaluationResponse withGetEvaluationOutput(openapisdk.models.shared.GetEvaluationOutput getEvaluationOutput) {
        this.getEvaluationOutput = getEvaluationOutput;
        return this;
    }
    public Object internalServerException;
    public GetEvaluationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public GetEvaluationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEvaluationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}