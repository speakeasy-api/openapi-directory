package openapisdk.models.operations;



public class DeleteMlModelResponse {
    public String contentType;
    public DeleteMlModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteMlModelOutput deleteMLModelOutput;
    public DeleteMlModelResponse withDeleteMlModelOutput(openapisdk.models.shared.DeleteMlModelOutput deleteMLModelOutput) {
        this.deleteMLModelOutput = deleteMLModelOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteMlModelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public DeleteMlModelResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteMlModelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteMlModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}