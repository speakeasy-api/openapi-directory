package openapisdk.models.operations;



public class GetDataSourceResponse {
    public String contentType;
    public GetDataSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDataSourceOutput getDataSourceOutput;
    public GetDataSourceResponse withGetDataSourceOutput(openapisdk.models.shared.GetDataSourceOutput getDataSourceOutput) {
        this.getDataSourceOutput = getDataSourceOutput;
        return this;
    }
    public Object internalServerException;
    public GetDataSourceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public GetDataSourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDataSourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetDataSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}