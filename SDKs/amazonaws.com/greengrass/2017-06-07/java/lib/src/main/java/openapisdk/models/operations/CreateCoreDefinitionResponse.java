package openapisdk.models.operations;



public class CreateCoreDefinitionResponse {
    public Object badRequestException;
    public CreateCoreDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateCoreDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCoreDefinitionResponse createCoreDefinitionResponse;
    public CreateCoreDefinitionResponse withCreateCoreDefinitionResponse(openapisdk.models.shared.CreateCoreDefinitionResponse createCoreDefinitionResponse) {
        this.createCoreDefinitionResponse = createCoreDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public CreateCoreDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}