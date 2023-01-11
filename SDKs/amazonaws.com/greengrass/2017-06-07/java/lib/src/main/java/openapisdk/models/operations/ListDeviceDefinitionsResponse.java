package openapisdk.models.operations;



public class ListDeviceDefinitionsResponse {
    public String contentType;
    public ListDeviceDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDeviceDefinitionsResponse listDeviceDefinitionsResponse;
    public ListDeviceDefinitionsResponse withListDeviceDefinitionsResponse(openapisdk.models.shared.ListDeviceDefinitionsResponse listDeviceDefinitionsResponse) {
        this.listDeviceDefinitionsResponse = listDeviceDefinitionsResponse;
        return this;
    }
    public Long statusCode;
    public ListDeviceDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}