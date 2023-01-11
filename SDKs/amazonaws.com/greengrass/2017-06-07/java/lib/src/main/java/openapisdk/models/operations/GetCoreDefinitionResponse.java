package openapisdk.models.operations;



public class GetCoreDefinitionResponse {
    public Object badRequestException;
    public GetCoreDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetCoreDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCoreDefinitionResponse getCoreDefinitionResponse;
    public GetCoreDefinitionResponse withGetCoreDefinitionResponse(openapisdk.models.shared.GetCoreDefinitionResponse getCoreDefinitionResponse) {
        this.getCoreDefinitionResponse = getCoreDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public GetCoreDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}