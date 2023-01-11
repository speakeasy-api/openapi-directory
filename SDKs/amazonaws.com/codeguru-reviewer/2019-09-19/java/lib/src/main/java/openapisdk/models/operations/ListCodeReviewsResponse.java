package openapisdk.models.operations;



public class ListCodeReviewsResponse {
    public Object accessDeniedException;
    public ListCodeReviewsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListCodeReviewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListCodeReviewsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListCodeReviewsResponse listCodeReviewsResponse;
    public ListCodeReviewsResponse withListCodeReviewsResponse(openapisdk.models.shared.ListCodeReviewsResponse listCodeReviewsResponse) {
        this.listCodeReviewsResponse = listCodeReviewsResponse;
        return this;
    }
    public Long statusCode;
    public ListCodeReviewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListCodeReviewsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListCodeReviewsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}