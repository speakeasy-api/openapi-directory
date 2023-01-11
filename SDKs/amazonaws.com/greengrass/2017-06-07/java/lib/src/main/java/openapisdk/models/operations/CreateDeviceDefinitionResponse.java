package openapisdk.models.operations;



public class CreateDeviceDefinitionResponse {
    public Object badRequestException;
    public CreateDeviceDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateDeviceDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDeviceDefinitionResponse createDeviceDefinitionResponse;
    public CreateDeviceDefinitionResponse withCreateDeviceDefinitionResponse(openapisdk.models.shared.CreateDeviceDefinitionResponse createDeviceDefinitionResponse) {
        this.createDeviceDefinitionResponse = createDeviceDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public CreateDeviceDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}