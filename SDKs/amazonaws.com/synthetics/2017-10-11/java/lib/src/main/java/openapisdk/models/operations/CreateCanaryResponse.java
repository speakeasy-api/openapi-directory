package openapisdk.models.operations;



public class CreateCanaryResponse {
    public String contentType;
    public CreateCanaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCanaryResponse createCanaryResponse;
    public CreateCanaryResponse withCreateCanaryResponse(openapisdk.models.shared.CreateCanaryResponse createCanaryResponse) {
        this.createCanaryResponse = createCanaryResponse;
        return this;
    }
    public Object internalServerException;
    public CreateCanaryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CreateCanaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateCanaryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}