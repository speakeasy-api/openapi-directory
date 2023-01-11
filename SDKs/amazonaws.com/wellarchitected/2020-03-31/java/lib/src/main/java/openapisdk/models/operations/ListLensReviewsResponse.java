package openapisdk.models.operations;



public class ListLensReviewsResponse {
    public Object accessDeniedException;
    public ListLensReviewsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListLensReviewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListLensReviewsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListLensReviewsOutput listLensReviewsOutput;
    public ListLensReviewsResponse withListLensReviewsOutput(openapisdk.models.shared.ListLensReviewsOutput listLensReviewsOutput) {
        this.listLensReviewsOutput = listLensReviewsOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListLensReviewsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListLensReviewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListLensReviewsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListLensReviewsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}