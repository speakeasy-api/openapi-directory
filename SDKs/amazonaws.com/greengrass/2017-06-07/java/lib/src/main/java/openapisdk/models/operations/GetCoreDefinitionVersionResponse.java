package openapisdk.models.operations;



public class GetCoreDefinitionVersionResponse {
    public Object badRequestException;
    public GetCoreDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetCoreDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCoreDefinitionVersionResponse getCoreDefinitionVersionResponse;
    public GetCoreDefinitionVersionResponse withGetCoreDefinitionVersionResponse(openapisdk.models.shared.GetCoreDefinitionVersionResponse getCoreDefinitionVersionResponse) {
        this.getCoreDefinitionVersionResponse = getCoreDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public GetCoreDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}