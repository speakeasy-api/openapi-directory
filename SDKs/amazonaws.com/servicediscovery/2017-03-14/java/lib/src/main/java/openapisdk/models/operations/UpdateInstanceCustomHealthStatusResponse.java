package openapisdk.models.operations;



public class UpdateInstanceCustomHealthStatusResponse {
    public String contentType;
    public UpdateInstanceCustomHealthStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object customHealthNotFound;
    public UpdateInstanceCustomHealthStatusResponse withCustomHealthNotFound(Object customHealthNotFound) {
        this.customHealthNotFound = customHealthNotFound;
        return this;
    }
    public Object instanceNotFound;
    public UpdateInstanceCustomHealthStatusResponse withInstanceNotFound(Object instanceNotFound) {
        this.instanceNotFound = instanceNotFound;
        return this;
    }
    public Object invalidInput;
    public UpdateInstanceCustomHealthStatusResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object serviceNotFound;
    public UpdateInstanceCustomHealthStatusResponse withServiceNotFound(Object serviceNotFound) {
        this.serviceNotFound = serviceNotFound;
        return this;
    }
    public Long statusCode;
    public UpdateInstanceCustomHealthStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}