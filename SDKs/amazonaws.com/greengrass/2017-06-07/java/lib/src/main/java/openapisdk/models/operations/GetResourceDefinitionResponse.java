package openapisdk.models.operations;



public class GetResourceDefinitionResponse {
    public Object badRequestException;
    public GetResourceDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetResourceDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourceDefinitionResponse getResourceDefinitionResponse;
    public GetResourceDefinitionResponse withGetResourceDefinitionResponse(openapisdk.models.shared.GetResourceDefinitionResponse getResourceDefinitionResponse) {
        this.getResourceDefinitionResponse = getResourceDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public GetResourceDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}