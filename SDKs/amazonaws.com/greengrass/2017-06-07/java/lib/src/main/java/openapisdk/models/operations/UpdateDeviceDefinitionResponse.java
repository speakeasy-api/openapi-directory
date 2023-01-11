package openapisdk.models.operations;



public class UpdateDeviceDefinitionResponse {
    public Object badRequestException;
    public UpdateDeviceDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateDeviceDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDeviceDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateDeviceDefinitionResponse;
    public UpdateDeviceDefinitionResponse withUpdateDeviceDefinitionResponse(java.util.Map<String, Object> updateDeviceDefinitionResponse) {
        this.updateDeviceDefinitionResponse = updateDeviceDefinitionResponse;
        return this;
    }
}