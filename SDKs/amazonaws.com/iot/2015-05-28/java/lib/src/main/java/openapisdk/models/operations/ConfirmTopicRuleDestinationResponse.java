package openapisdk.models.operations;



public class ConfirmTopicRuleDestinationResponse {
    public java.util.Map<String, Object> confirmTopicRuleDestinationResponse;
    public ConfirmTopicRuleDestinationResponse withConfirmTopicRuleDestinationResponse(java.util.Map<String, Object> confirmTopicRuleDestinationResponse) {
        this.confirmTopicRuleDestinationResponse = confirmTopicRuleDestinationResponse;
        return this;
    }
    public Object conflictingResourceUpdateException;
    public ConfirmTopicRuleDestinationResponse withConflictingResourceUpdateException(Object conflictingResourceUpdateException) {
        this.conflictingResourceUpdateException = conflictingResourceUpdateException;
        return this;
    }
    public String contentType;
    public ConfirmTopicRuleDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ConfirmTopicRuleDestinationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public ConfirmTopicRuleDestinationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public ConfirmTopicRuleDestinationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ConfirmTopicRuleDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ConfirmTopicRuleDestinationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}