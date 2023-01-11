package openapisdk.models.operations;



public class CreateResourceDefinitionResponse {
    public Object badRequestException;
    public CreateResourceDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateResourceDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateResourceDefinitionResponse createResourceDefinitionResponse;
    public CreateResourceDefinitionResponse withCreateResourceDefinitionResponse(openapisdk.models.shared.CreateResourceDefinitionResponse createResourceDefinitionResponse) {
        this.createResourceDefinitionResponse = createResourceDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public CreateResourceDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}