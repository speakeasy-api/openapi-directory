package openapisdk.models.operations;



public class GetDimensionKeyDetailsResponse {
    public String contentType;
    public GetDimensionKeyDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDimensionKeyDetailsResponse getDimensionKeyDetailsResponse;
    public GetDimensionKeyDetailsResponse withGetDimensionKeyDetailsResponse(openapisdk.models.shared.GetDimensionKeyDetailsResponse getDimensionKeyDetailsResponse) {
        this.getDimensionKeyDetailsResponse = getDimensionKeyDetailsResponse;
        return this;
    }
    public Object internalServiceError;
    public GetDimensionKeyDetailsResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidArgumentException;
    public GetDimensionKeyDetailsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object notAuthorizedException;
    public GetDimensionKeyDetailsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Long statusCode;
    public GetDimensionKeyDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}