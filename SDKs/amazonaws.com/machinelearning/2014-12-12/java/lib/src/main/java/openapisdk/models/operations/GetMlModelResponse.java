package openapisdk.models.operations;



public class GetMlModelResponse {
    public String contentType;
    public GetMlModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMlModelOutput getMLModelOutput;
    public GetMlModelResponse withGetMlModelOutput(openapisdk.models.shared.GetMlModelOutput getMLModelOutput) {
        this.getMLModelOutput = getMLModelOutput;
        return this;
    }
    public Object internalServerException;
    public GetMlModelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public GetMlModelResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMlModelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetMlModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}