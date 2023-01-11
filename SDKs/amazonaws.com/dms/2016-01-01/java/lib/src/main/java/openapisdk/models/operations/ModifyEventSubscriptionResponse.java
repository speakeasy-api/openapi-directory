package openapisdk.models.operations;



public class ModifyEventSubscriptionResponse {
    public String contentType;
    public ModifyEventSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object kmsAccessDeniedFault;
    public ModifyEventSubscriptionResponse withKmsAccessDeniedFault(Object kmsAccessDeniedFault) {
        this.kmsAccessDeniedFault = kmsAccessDeniedFault;
        return this;
    }
    public Object kmsDisabledFault;
    public ModifyEventSubscriptionResponse withKmsDisabledFault(Object kmsDisabledFault) {
        this.kmsDisabledFault = kmsDisabledFault;
        return this;
    }
    public Object kmsInvalidStateFault;
    public ModifyEventSubscriptionResponse withKmsInvalidStateFault(Object kmsInvalidStateFault) {
        this.kmsInvalidStateFault = kmsInvalidStateFault;
        return this;
    }
    public Object kmsNotFoundFault;
    public ModifyEventSubscriptionResponse withKmsNotFoundFault(Object kmsNotFoundFault) {
        this.kmsNotFoundFault = kmsNotFoundFault;
        return this;
    }
    public Object kmsThrottlingFault;
    public ModifyEventSubscriptionResponse withKmsThrottlingFault(Object kmsThrottlingFault) {
        this.kmsThrottlingFault = kmsThrottlingFault;
        return this;
    }
    public openapisdk.models.shared.ModifyEventSubscriptionResponse modifyEventSubscriptionResponse;
    public ModifyEventSubscriptionResponse withModifyEventSubscriptionResponse(openapisdk.models.shared.ModifyEventSubscriptionResponse modifyEventSubscriptionResponse) {
        this.modifyEventSubscriptionResponse = modifyEventSubscriptionResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public ModifyEventSubscriptionResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Object resourceQuotaExceededFault;
    public ModifyEventSubscriptionResponse withResourceQuotaExceededFault(Object resourceQuotaExceededFault) {
        this.resourceQuotaExceededFault = resourceQuotaExceededFault;
        return this;
    }
    public Object snsInvalidTopicFault;
    public ModifyEventSubscriptionResponse withSnsInvalidTopicFault(Object snsInvalidTopicFault) {
        this.snsInvalidTopicFault = snsInvalidTopicFault;
        return this;
    }
    public Object snsNoAuthorizationFault;
    public ModifyEventSubscriptionResponse withSnsNoAuthorizationFault(Object snsNoAuthorizationFault) {
        this.snsNoAuthorizationFault = snsNoAuthorizationFault;
        return this;
    }
    public Long statusCode;
    public ModifyEventSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}