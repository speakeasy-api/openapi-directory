package openapisdk.models.operations;



public class DeleteDeviceDefinitionResponse {
    public Object badRequestException;
    public DeleteDeviceDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteDeviceDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteDeviceDefinitionResponse;
    public DeleteDeviceDefinitionResponse withDeleteDeviceDefinitionResponse(java.util.Map<String, Object> deleteDeviceDefinitionResponse) {
        this.deleteDeviceDefinitionResponse = deleteDeviceDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public DeleteDeviceDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}