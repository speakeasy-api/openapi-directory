package openapisdk.models.operations;



public class GetFunctionDefinitionResponse {
    public Object badRequestException;
    public GetFunctionDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetFunctionDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFunctionDefinitionResponse getFunctionDefinitionResponse;
    public GetFunctionDefinitionResponse withGetFunctionDefinitionResponse(openapisdk.models.shared.GetFunctionDefinitionResponse getFunctionDefinitionResponse) {
        this.getFunctionDefinitionResponse = getFunctionDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public GetFunctionDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}