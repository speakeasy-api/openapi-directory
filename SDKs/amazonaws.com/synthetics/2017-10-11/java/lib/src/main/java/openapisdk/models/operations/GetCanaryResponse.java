package openapisdk.models.operations;



public class GetCanaryResponse {
    public String contentType;
    public GetCanaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCanaryResponse getCanaryResponse;
    public GetCanaryResponse withGetCanaryResponse(openapisdk.models.shared.GetCanaryResponse getCanaryResponse) {
        this.getCanaryResponse = getCanaryResponse;
        return this;
    }
    public Object internalServerException;
    public GetCanaryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public GetCanaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetCanaryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}