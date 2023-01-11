package openapisdk.models.operations;



public class UpdateMlModelResponse {
    public String contentType;
    public UpdateMlModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateMlModelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public UpdateMlModelResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateMlModelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateMlModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateMlModelOutput updateMLModelOutput;
    public UpdateMlModelResponse withUpdateMlModelOutput(openapisdk.models.shared.UpdateMlModelOutput updateMLModelOutput) {
        this.updateMLModelOutput = updateMLModelOutput;
        return this;
    }
}