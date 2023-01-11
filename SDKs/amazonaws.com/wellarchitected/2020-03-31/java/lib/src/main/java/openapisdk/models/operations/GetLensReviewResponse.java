package openapisdk.models.operations;



public class GetLensReviewResponse {
    public Object accessDeniedException;
    public GetLensReviewResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetLensReviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLensReviewOutput getLensReviewOutput;
    public GetLensReviewResponse withGetLensReviewOutput(openapisdk.models.shared.GetLensReviewOutput getLensReviewOutput) {
        this.getLensReviewOutput = getLensReviewOutput;
        return this;
    }
    public Object internalServerException;
    public GetLensReviewResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLensReviewResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetLensReviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetLensReviewResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetLensReviewResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}