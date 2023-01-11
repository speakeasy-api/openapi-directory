package openapisdk.models.operations;



public class ListAnomalyDetectorsResponse {
    public Object accessDeniedException;
    public ListAnomalyDetectorsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAnomalyDetectorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAnomalyDetectorsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAnomalyDetectorsResponse listAnomalyDetectorsResponse;
    public ListAnomalyDetectorsResponse withListAnomalyDetectorsResponse(openapisdk.models.shared.ListAnomalyDetectorsResponse listAnomalyDetectorsResponse) {
        this.listAnomalyDetectorsResponse = listAnomalyDetectorsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAnomalyDetectorsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAnomalyDetectorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListAnomalyDetectorsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public ListAnomalyDetectorsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}