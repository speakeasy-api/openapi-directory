package openapisdk.models.operations;



public class ListLensReviewImprovementsResponse {
    public Object accessDeniedException;
    public ListLensReviewImprovementsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListLensReviewImprovementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListLensReviewImprovementsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListLensReviewImprovementsOutput listLensReviewImprovementsOutput;
    public ListLensReviewImprovementsResponse withListLensReviewImprovementsOutput(openapisdk.models.shared.ListLensReviewImprovementsOutput listLensReviewImprovementsOutput) {
        this.listLensReviewImprovementsOutput = listLensReviewImprovementsOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListLensReviewImprovementsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListLensReviewImprovementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListLensReviewImprovementsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListLensReviewImprovementsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}