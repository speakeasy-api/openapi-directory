package openapisdk.models.operations;



public class GetDeviceDefinitionVersionResponse {
    public Object badRequestException;
    public GetDeviceDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetDeviceDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeviceDefinitionVersionResponse getDeviceDefinitionVersionResponse;
    public GetDeviceDefinitionVersionResponse withGetDeviceDefinitionVersionResponse(openapisdk.models.shared.GetDeviceDefinitionVersionResponse getDeviceDefinitionVersionResponse) {
        this.getDeviceDefinitionVersionResponse = getDeviceDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public GetDeviceDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}