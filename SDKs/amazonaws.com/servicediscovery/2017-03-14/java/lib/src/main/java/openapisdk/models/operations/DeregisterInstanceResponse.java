package openapisdk.models.operations;



public class DeregisterInstanceResponse {
    public String contentType;
    public DeregisterInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeregisterInstanceResponse deregisterInstanceResponse;
    public DeregisterInstanceResponse withDeregisterInstanceResponse(openapisdk.models.shared.DeregisterInstanceResponse deregisterInstanceResponse) {
        this.deregisterInstanceResponse = deregisterInstanceResponse;
        return this;
    }
    public Object duplicateRequest;
    public DeregisterInstanceResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object instanceNotFound;
    public DeregisterInstanceResponse withInstanceNotFound(Object instanceNotFound) {
        this.instanceNotFound = instanceNotFound;
        return this;
    }
    public Object invalidInput;
    public DeregisterInstanceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object resourceInUse;
    public DeregisterInstanceResponse withResourceInUse(Object resourceInUse) {
        this.resourceInUse = resourceInUse;
        return this;
    }
    public Object serviceNotFound;
    public DeregisterInstanceResponse withServiceNotFound(Object serviceNotFound) {
        this.serviceNotFound = serviceNotFound;
        return this;
    }
    public Long statusCode;
    public DeregisterInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}