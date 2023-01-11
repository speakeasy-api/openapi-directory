package openapisdk.models.operations;



public class CreateSubscriptionResponse {
    public String contentType;
    public CreateSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createSubscriptionResponse;
    public CreateSubscriptionResponse withCreateSubscriptionResponse(java.util.Map<String, Object> createSubscriptionResponse) {
        this.createSubscriptionResponse = createSubscriptionResponse;
        return this;
    }
    public Object internalErrorException;
    public CreateSubscriptionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateSubscriptionResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}