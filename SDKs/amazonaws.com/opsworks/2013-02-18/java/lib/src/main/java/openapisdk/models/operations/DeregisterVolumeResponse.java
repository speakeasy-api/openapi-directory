package openapisdk.models.operations;



public class DeregisterVolumeResponse {
    public String contentType;
    public DeregisterVolumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public DeregisterVolumeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeregisterVolumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeregisterVolumeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}