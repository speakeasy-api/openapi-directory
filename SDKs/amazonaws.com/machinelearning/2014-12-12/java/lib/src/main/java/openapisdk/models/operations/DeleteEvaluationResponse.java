package openapisdk.models.operations;



public class DeleteEvaluationResponse {
    public String contentType;
    public DeleteEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteEvaluationOutput deleteEvaluationOutput;
    public DeleteEvaluationResponse withDeleteEvaluationOutput(openapisdk.models.shared.DeleteEvaluationOutput deleteEvaluationOutput) {
        this.deleteEvaluationOutput = deleteEvaluationOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteEvaluationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public DeleteEvaluationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteEvaluationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}