package openapisdk.models.operations;



public class ListAnomalyGroupSummariesResponse {
    public Object accessDeniedException;
    public ListAnomalyGroupSummariesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAnomalyGroupSummariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAnomalyGroupSummariesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAnomalyGroupSummariesResponse listAnomalyGroupSummariesResponse;
    public ListAnomalyGroupSummariesResponse withListAnomalyGroupSummariesResponse(openapisdk.models.shared.ListAnomalyGroupSummariesResponse listAnomalyGroupSummariesResponse) {
        this.listAnomalyGroupSummariesResponse = listAnomalyGroupSummariesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAnomalyGroupSummariesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAnomalyGroupSummariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListAnomalyGroupSummariesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public ListAnomalyGroupSummariesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}