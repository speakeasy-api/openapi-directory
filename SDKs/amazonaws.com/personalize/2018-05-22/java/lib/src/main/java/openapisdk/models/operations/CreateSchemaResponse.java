package openapisdk.models.operations;



public class CreateSchemaResponse {
    public String contentType;
    public CreateSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSchemaResponse createSchemaResponse;
    public CreateSchemaResponse withCreateSchemaResponse(openapisdk.models.shared.CreateSchemaResponse createSchemaResponse) {
        this.createSchemaResponse = createSchemaResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateSchemaResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateSchemaResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateSchemaResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}