package openapisdk.models.operations;



public class ListAnomalyGroupTimeSeriesResponse {
    public Object accessDeniedException;
    public ListAnomalyGroupTimeSeriesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAnomalyGroupTimeSeriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAnomalyGroupTimeSeriesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAnomalyGroupTimeSeriesResponse listAnomalyGroupTimeSeriesResponse;
    public ListAnomalyGroupTimeSeriesResponse withListAnomalyGroupTimeSeriesResponse(openapisdk.models.shared.ListAnomalyGroupTimeSeriesResponse listAnomalyGroupTimeSeriesResponse) {
        this.listAnomalyGroupTimeSeriesResponse = listAnomalyGroupTimeSeriesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAnomalyGroupTimeSeriesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAnomalyGroupTimeSeriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListAnomalyGroupTimeSeriesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public ListAnomalyGroupTimeSeriesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}