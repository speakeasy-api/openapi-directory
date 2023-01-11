package openapisdk.models.operations;



public class GetLensReviewReportResponse {
    public Object accessDeniedException;
    public GetLensReviewReportResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetLensReviewReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLensReviewReportOutput getLensReviewReportOutput;
    public GetLensReviewReportResponse withGetLensReviewReportOutput(openapisdk.models.shared.GetLensReviewReportOutput getLensReviewReportOutput) {
        this.getLensReviewReportOutput = getLensReviewReportOutput;
        return this;
    }
    public Object internalServerException;
    public GetLensReviewReportResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLensReviewReportResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetLensReviewReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetLensReviewReportResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetLensReviewReportResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}