package openapisdk.models.operations;



public class UpdateDataSourceResponse {
    public String contentType;
    public UpdateDataSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateDataSourceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public UpdateDataSourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateDataSourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDataSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateDataSourceOutput updateDataSourceOutput;
    public UpdateDataSourceResponse withUpdateDataSourceOutput(openapisdk.models.shared.UpdateDataSourceOutput updateDataSourceOutput) {
        this.updateDataSourceOutput = updateDataSourceOutput;
        return this;
    }
}