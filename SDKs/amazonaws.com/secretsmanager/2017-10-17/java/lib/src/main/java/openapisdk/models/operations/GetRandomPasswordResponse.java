package openapisdk.models.operations;



public class GetRandomPasswordResponse {
    public String contentType;
    public GetRandomPasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRandomPasswordResponse getRandomPasswordResponse;
    public GetRandomPasswordResponse withGetRandomPasswordResponse(openapisdk.models.shared.GetRandomPasswordResponse getRandomPasswordResponse) {
        this.getRandomPasswordResponse = getRandomPasswordResponse;
        return this;
    }
    public Object internalServiceError;
    public GetRandomPasswordResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public GetRandomPasswordResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public GetRandomPasswordResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetRandomPasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}