package openapisdk.models.operations;



public class GetDelegationsResponse {
    public Object accessDeniedException;
    public GetDelegationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetDelegationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDelegationsResponse getDelegationsResponse;
    public GetDelegationsResponse withGetDelegationsResponse(openapisdk.models.shared.GetDelegationsResponse getDelegationsResponse) {
        this.getDelegationsResponse = getDelegationsResponse;
        return this;
    }
    public Object internalServerException;
    public GetDelegationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public GetDelegationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetDelegationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}