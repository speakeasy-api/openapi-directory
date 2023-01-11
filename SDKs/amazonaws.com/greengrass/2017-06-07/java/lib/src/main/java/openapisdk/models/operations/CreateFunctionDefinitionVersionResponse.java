package openapisdk.models.operations;



public class CreateFunctionDefinitionVersionResponse {
    public Object badRequestException;
    public CreateFunctionDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateFunctionDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFunctionDefinitionVersionResponse createFunctionDefinitionVersionResponse;
    public CreateFunctionDefinitionVersionResponse withCreateFunctionDefinitionVersionResponse(openapisdk.models.shared.CreateFunctionDefinitionVersionResponse createFunctionDefinitionVersionResponse) {
        this.createFunctionDefinitionVersionResponse = createFunctionDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public CreateFunctionDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}