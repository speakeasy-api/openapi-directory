package openapisdk.models.operations;



public class GetServiceResponse {
    public String contentType;
    public GetServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetServiceResponse getServiceResponse;
    public GetServiceResponse withGetServiceResponse(openapisdk.models.shared.GetServiceResponse getServiceResponse) {
        this.getServiceResponse = getServiceResponse;
        return this;
    }
    public Object invalidInput;
    public GetServiceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object serviceNotFound;
    public GetServiceResponse withServiceNotFound(Object serviceNotFound) {
        this.serviceNotFound = serviceNotFound;
        return this;
    }
    public Long statusCode;
    public GetServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}