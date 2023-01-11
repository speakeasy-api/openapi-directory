package openapisdk.models.operations;



public class ListEventSubscriptionsResponse {
    public Object accessDeniedException;
    public ListEventSubscriptionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListEventSubscriptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListEventSubscriptionsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public ListEventSubscriptionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListEventSubscriptionsResponse listEventSubscriptionsResponse;
    public ListEventSubscriptionsResponse withListEventSubscriptionsResponse(openapisdk.models.shared.ListEventSubscriptionsResponse listEventSubscriptionsResponse) {
        this.listEventSubscriptionsResponse = listEventSubscriptionsResponse;
        return this;
    }
    public Object noSuchEntityException;
    public ListEventSubscriptionsResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Long statusCode;
    public ListEventSubscriptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}