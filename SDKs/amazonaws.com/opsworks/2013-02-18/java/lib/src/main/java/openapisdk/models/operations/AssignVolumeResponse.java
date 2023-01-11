package openapisdk.models.operations;



public class AssignVolumeResponse {
    public String contentType;
    public AssignVolumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public AssignVolumeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssignVolumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AssignVolumeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}