package openapisdk.models.operations;



public class DeleteDataSourceResponse {
    public String contentType;
    public DeleteDataSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteDataSourceOutput deleteDataSourceOutput;
    public DeleteDataSourceResponse withDeleteDataSourceOutput(openapisdk.models.shared.DeleteDataSourceOutput deleteDataSourceOutput) {
        this.deleteDataSourceOutput = deleteDataSourceOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteDataSourceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public DeleteDataSourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteDataSourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteDataSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}