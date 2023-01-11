package openapisdk.models.operations;



public class ListMetricSetsResponse {
    public Object accessDeniedException;
    public ListMetricSetsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListMetricSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListMetricSetsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListMetricSetsResponse listMetricSetsResponse;
    public ListMetricSetsResponse withListMetricSetsResponse(openapisdk.models.shared.ListMetricSetsResponse listMetricSetsResponse) {
        this.listMetricSetsResponse = listMetricSetsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListMetricSetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListMetricSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListMetricSetsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public ListMetricSetsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}