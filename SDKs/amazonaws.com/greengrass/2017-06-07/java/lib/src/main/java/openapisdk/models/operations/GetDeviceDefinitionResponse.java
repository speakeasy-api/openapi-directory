package openapisdk.models.operations;



public class GetDeviceDefinitionResponse {
    public Object badRequestException;
    public GetDeviceDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetDeviceDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeviceDefinitionResponse getDeviceDefinitionResponse;
    public GetDeviceDefinitionResponse withGetDeviceDefinitionResponse(openapisdk.models.shared.GetDeviceDefinitionResponse getDeviceDefinitionResponse) {
        this.getDeviceDefinitionResponse = getDeviceDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public GetDeviceDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}