package openapisdk.models.operations;



public class DeleteEventSubscriptionResponse {
    public String contentType;
    public DeleteEventSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteEventSubscriptionResponse deleteEventSubscriptionResponse;
    public DeleteEventSubscriptionResponse withDeleteEventSubscriptionResponse(openapisdk.models.shared.DeleteEventSubscriptionResponse deleteEventSubscriptionResponse) {
        this.deleteEventSubscriptionResponse = deleteEventSubscriptionResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DeleteEventSubscriptionResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DeleteEventSubscriptionResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DeleteEventSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}