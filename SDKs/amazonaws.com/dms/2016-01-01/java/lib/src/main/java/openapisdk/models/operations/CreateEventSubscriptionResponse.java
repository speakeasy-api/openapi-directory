package openapisdk.models.operations;



public class CreateEventSubscriptionResponse {
    public String contentType;
    public CreateEventSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEventSubscriptionResponse createEventSubscriptionResponse;
    public CreateEventSubscriptionResponse withCreateEventSubscriptionResponse(openapisdk.models.shared.CreateEventSubscriptionResponse createEventSubscriptionResponse) {
        this.createEventSubscriptionResponse = createEventSubscriptionResponse;
        return this;
    }
    public Object kmsAccessDeniedFault;
    public CreateEventSubscriptionResponse withKmsAccessDeniedFault(Object kmsAccessDeniedFault) {
        this.kmsAccessDeniedFault = kmsAccessDeniedFault;
        return this;
    }
    public Object kmsDisabledFault;
    public CreateEventSubscriptionResponse withKmsDisabledFault(Object kmsDisabledFault) {
        this.kmsDisabledFault = kmsDisabledFault;
        return this;
    }
    public Object kmsInvalidStateFault;
    public CreateEventSubscriptionResponse withKmsInvalidStateFault(Object kmsInvalidStateFault) {
        this.kmsInvalidStateFault = kmsInvalidStateFault;
        return this;
    }
    public Object kmsNotFoundFault;
    public CreateEventSubscriptionResponse withKmsNotFoundFault(Object kmsNotFoundFault) {
        this.kmsNotFoundFault = kmsNotFoundFault;
        return this;
    }
    public Object kmsThrottlingFault;
    public CreateEventSubscriptionResponse withKmsThrottlingFault(Object kmsThrottlingFault) {
        this.kmsThrottlingFault = kmsThrottlingFault;
        return this;
    }
    public Object resourceAlreadyExistsFault;
    public CreateEventSubscriptionResponse withResourceAlreadyExistsFault(Object resourceAlreadyExistsFault) {
        this.resourceAlreadyExistsFault = resourceAlreadyExistsFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public CreateEventSubscriptionResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Object resourceQuotaExceededFault;
    public CreateEventSubscriptionResponse withResourceQuotaExceededFault(Object resourceQuotaExceededFault) {
        this.resourceQuotaExceededFault = resourceQuotaExceededFault;
        return this;
    }
    public Object snsInvalidTopicFault;
    public CreateEventSubscriptionResponse withSnsInvalidTopicFault(Object snsInvalidTopicFault) {
        this.snsInvalidTopicFault = snsInvalidTopicFault;
        return this;
    }
    public Object snsNoAuthorizationFault;
    public CreateEventSubscriptionResponse withSnsNoAuthorizationFault(Object snsNoAuthorizationFault) {
        this.snsNoAuthorizationFault = snsNoAuthorizationFault;
        return this;
    }
    public Long statusCode;
    public CreateEventSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}