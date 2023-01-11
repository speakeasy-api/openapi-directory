package openapisdk.models.operations;



public class SetLoadBasedAutoScalingResponse {
    public String contentType;
    public SetLoadBasedAutoScalingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public SetLoadBasedAutoScalingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public SetLoadBasedAutoScalingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public SetLoadBasedAutoScalingResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}