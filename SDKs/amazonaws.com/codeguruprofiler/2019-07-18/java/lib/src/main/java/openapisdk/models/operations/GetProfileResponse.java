package openapisdk.models.operations;



public class GetProfileResponse {
    public String contentType;
    public GetProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetProfileResponse getProfileResponse;
    public GetProfileResponse withGetProfileResponse(openapisdk.models.shared.GetProfileResponse getProfileResponse) {
        this.getProfileResponse = getProfileResponse;
        return this;
    }
    public Object internalServerException;
    public GetProfileResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetProfileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}