package openapisdk.models.operations;



public class GetInstanceResponse {
    public String contentType;
    public GetInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInstanceResponse getInstanceResponse;
    public GetInstanceResponse withGetInstanceResponse(openapisdk.models.shared.GetInstanceResponse getInstanceResponse) {
        this.getInstanceResponse = getInstanceResponse;
        return this;
    }
    public Object instanceNotFound;
    public GetInstanceResponse withInstanceNotFound(Object instanceNotFound) {
        this.instanceNotFound = instanceNotFound;
        return this;
    }
    public Object invalidInput;
    public GetInstanceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object serviceNotFound;
    public GetInstanceResponse withServiceNotFound(Object serviceNotFound) {
        this.serviceNotFound = serviceNotFound;
        return this;
    }
    public Long statusCode;
    public GetInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}