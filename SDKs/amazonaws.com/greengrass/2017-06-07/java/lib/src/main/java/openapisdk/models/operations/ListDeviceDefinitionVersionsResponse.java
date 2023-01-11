package openapisdk.models.operations;



public class ListDeviceDefinitionVersionsResponse {
    public Object badRequestException;
    public ListDeviceDefinitionVersionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListDeviceDefinitionVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDeviceDefinitionVersionsResponse listDeviceDefinitionVersionsResponse;
    public ListDeviceDefinitionVersionsResponse withListDeviceDefinitionVersionsResponse(openapisdk.models.shared.ListDeviceDefinitionVersionsResponse listDeviceDefinitionVersionsResponse) {
        this.listDeviceDefinitionVersionsResponse = listDeviceDefinitionVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ListDeviceDefinitionVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}