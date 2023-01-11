package openapisdk.models.operations;



public class UpdateEvaluationResponse {
    public String contentType;
    public UpdateEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateEvaluationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public UpdateEvaluationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateEvaluationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateEvaluationOutput updateEvaluationOutput;
    public UpdateEvaluationResponse withUpdateEvaluationOutput(openapisdk.models.shared.UpdateEvaluationOutput updateEvaluationOutput) {
        this.updateEvaluationOutput = updateEvaluationOutput;
        return this;
    }
}