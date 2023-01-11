package openapisdk.models.operations;



public class GetFunctionDefinitionVersionResponse {
    public Object badRequestException;
    public GetFunctionDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetFunctionDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFunctionDefinitionVersionResponse getFunctionDefinitionVersionResponse;
    public GetFunctionDefinitionVersionResponse withGetFunctionDefinitionVersionResponse(openapisdk.models.shared.GetFunctionDefinitionVersionResponse getFunctionDefinitionVersionResponse) {
        this.getFunctionDefinitionVersionResponse = getFunctionDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public GetFunctionDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}