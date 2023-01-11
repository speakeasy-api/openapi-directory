package openapisdk.models.operations;



public class UnassignVolumeResponse {
    public String contentType;
    public UnassignVolumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public UnassignVolumeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UnassignVolumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public UnassignVolumeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}