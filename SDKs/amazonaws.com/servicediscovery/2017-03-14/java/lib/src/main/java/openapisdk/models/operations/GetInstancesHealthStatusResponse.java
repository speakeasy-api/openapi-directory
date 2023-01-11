package openapisdk.models.operations;



public class GetInstancesHealthStatusResponse {
    public String contentType;
    public GetInstancesHealthStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInstancesHealthStatusResponse getInstancesHealthStatusResponse;
    public GetInstancesHealthStatusResponse withGetInstancesHealthStatusResponse(openapisdk.models.shared.GetInstancesHealthStatusResponse getInstancesHealthStatusResponse) {
        this.getInstancesHealthStatusResponse = getInstancesHealthStatusResponse;
        return this;
    }
    public Object instanceNotFound;
    public GetInstancesHealthStatusResponse withInstanceNotFound(Object instanceNotFound) {
        this.instanceNotFound = instanceNotFound;
        return this;
    }
    public Object invalidInput;
    public GetInstancesHealthStatusResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object serviceNotFound;
    public GetInstancesHealthStatusResponse withServiceNotFound(Object serviceNotFound) {
        this.serviceNotFound = serviceNotFound;
        return this;
    }
    public Long statusCode;
    public GetInstancesHealthStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}