package openapisdk.models.operations;



public class CreateResourceDefinitionVersionResponse {
    public Object badRequestException;
    public CreateResourceDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateResourceDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateResourceDefinitionVersionResponse createResourceDefinitionVersionResponse;
    public CreateResourceDefinitionVersionResponse withCreateResourceDefinitionVersionResponse(openapisdk.models.shared.CreateResourceDefinitionVersionResponse createResourceDefinitionVersionResponse) {
        this.createResourceDefinitionVersionResponse = createResourceDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public CreateResourceDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}