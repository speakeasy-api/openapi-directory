package openapisdk.models.operations;



public class DeleteServiceResponse {
    public String contentType;
    public DeleteServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteServiceResponse;
    public DeleteServiceResponse withDeleteServiceResponse(java.util.Map<String, Object> deleteServiceResponse) {
        this.deleteServiceResponse = deleteServiceResponse;
        return this;
    }
    public Object invalidInput;
    public DeleteServiceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object resourceInUse;
    public DeleteServiceResponse withResourceInUse(Object resourceInUse) {
        this.resourceInUse = resourceInUse;
        return this;
    }
    public Object serviceNotFound;
    public DeleteServiceResponse withServiceNotFound(Object serviceNotFound) {
        this.serviceNotFound = serviceNotFound;
        return this;
    }
    public Long statusCode;
    public DeleteServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}