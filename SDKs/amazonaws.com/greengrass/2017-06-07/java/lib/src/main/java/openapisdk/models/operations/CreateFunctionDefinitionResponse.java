package openapisdk.models.operations;



public class CreateFunctionDefinitionResponse {
    public Object badRequestException;
    public CreateFunctionDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateFunctionDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFunctionDefinitionResponse createFunctionDefinitionResponse;
    public CreateFunctionDefinitionResponse withCreateFunctionDefinitionResponse(openapisdk.models.shared.CreateFunctionDefinitionResponse createFunctionDefinitionResponse) {
        this.createFunctionDefinitionResponse = createFunctionDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public CreateFunctionDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}