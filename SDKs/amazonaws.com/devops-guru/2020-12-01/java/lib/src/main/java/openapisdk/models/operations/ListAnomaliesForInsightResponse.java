package openapisdk.models.operations;



public class ListAnomaliesForInsightResponse {
    public Object accessDeniedException;
    public ListAnomaliesForInsightResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAnomaliesForInsightResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAnomaliesForInsightResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAnomaliesForInsightResponse listAnomaliesForInsightResponse;
    public ListAnomaliesForInsightResponse withListAnomaliesForInsightResponse(openapisdk.models.shared.ListAnomaliesForInsightResponse listAnomaliesForInsightResponse) {
        this.listAnomaliesForInsightResponse = listAnomaliesForInsightResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAnomaliesForInsightResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAnomaliesForInsightResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAnomaliesForInsightResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListAnomaliesForInsightResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}