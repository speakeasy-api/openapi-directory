package openapisdk.models.operations;



public class GetResourceDefinitionVersionResponse {
    public Object badRequestException;
    public GetResourceDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetResourceDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourceDefinitionVersionResponse getResourceDefinitionVersionResponse;
    public GetResourceDefinitionVersionResponse withGetResourceDefinitionVersionResponse(openapisdk.models.shared.GetResourceDefinitionVersionResponse getResourceDefinitionVersionResponse) {
        this.getResourceDefinitionVersionResponse = getResourceDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public GetResourceDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}