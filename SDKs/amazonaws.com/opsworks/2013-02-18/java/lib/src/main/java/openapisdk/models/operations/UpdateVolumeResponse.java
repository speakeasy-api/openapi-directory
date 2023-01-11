package openapisdk.models.operations;



public class UpdateVolumeResponse {
    public String contentType;
    public UpdateVolumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateVolumeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateVolumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public UpdateVolumeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}