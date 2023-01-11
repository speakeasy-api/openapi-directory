package openapisdk.models.operations;



public class GetAssociatedResourceResponse {
    public String contentType;
    public GetAssociatedResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAssociatedResourceResponse getAssociatedResourceResponse;
    public GetAssociatedResourceResponse withGetAssociatedResourceResponse(openapisdk.models.shared.GetAssociatedResourceResponse getAssociatedResourceResponse) {
        this.getAssociatedResourceResponse = getAssociatedResourceResponse;
        return this;
    }
    public Object internalServerException;
    public GetAssociatedResourceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAssociatedResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAssociatedResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetAssociatedResourceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}