package openapisdk.models.operations;



public class SetTimeBasedAutoScalingResponse {
    public String contentType;
    public SetTimeBasedAutoScalingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public SetTimeBasedAutoScalingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public SetTimeBasedAutoScalingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public SetTimeBasedAutoScalingResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}