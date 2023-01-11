package openapisdk.models.operations;



public class CreateDeviceDefinitionVersionResponse {
    public Object badRequestException;
    public CreateDeviceDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateDeviceDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDeviceDefinitionVersionResponse createDeviceDefinitionVersionResponse;
    public CreateDeviceDefinitionVersionResponse withCreateDeviceDefinitionVersionResponse(openapisdk.models.shared.CreateDeviceDefinitionVersionResponse createDeviceDefinitionVersionResponse) {
        this.createDeviceDefinitionVersionResponse = createDeviceDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public CreateDeviceDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}