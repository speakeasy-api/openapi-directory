package openapisdk.models.operations;



public class CreateCoreDefinitionVersionResponse {
    public Object badRequestException;
    public CreateCoreDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateCoreDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCoreDefinitionVersionResponse createCoreDefinitionVersionResponse;
    public CreateCoreDefinitionVersionResponse withCreateCoreDefinitionVersionResponse(openapisdk.models.shared.CreateCoreDefinitionVersionResponse createCoreDefinitionVersionResponse) {
        this.createCoreDefinitionVersionResponse = createCoreDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public CreateCoreDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}