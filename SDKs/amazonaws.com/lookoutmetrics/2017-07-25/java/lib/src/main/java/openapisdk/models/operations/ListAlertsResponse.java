package openapisdk.models.operations;



public class ListAlertsResponse {
    public Object accessDeniedException;
    public ListAlertsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAlertsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAlertsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAlertsResponse listAlertsResponse;
    public ListAlertsResponse withListAlertsResponse(openapisdk.models.shared.ListAlertsResponse listAlertsResponse) {
        this.listAlertsResponse = listAlertsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAlertsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAlertsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListAlertsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public ListAlertsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}