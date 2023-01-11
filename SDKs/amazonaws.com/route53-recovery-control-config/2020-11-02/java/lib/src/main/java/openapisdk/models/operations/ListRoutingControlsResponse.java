package openapisdk.models.operations;



public class ListRoutingControlsResponse {
    public Object accessDeniedException;
    public ListRoutingControlsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListRoutingControlsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListRoutingControlsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListRoutingControlsResponse listRoutingControlsResponse;
    public ListRoutingControlsResponse withListRoutingControlsResponse(openapisdk.models.shared.ListRoutingControlsResponse listRoutingControlsResponse) {
        this.listRoutingControlsResponse = listRoutingControlsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListRoutingControlsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListRoutingControlsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListRoutingControlsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListRoutingControlsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}