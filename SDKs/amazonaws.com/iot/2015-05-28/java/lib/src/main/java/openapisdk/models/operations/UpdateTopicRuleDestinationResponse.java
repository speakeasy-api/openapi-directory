package openapisdk.models.operations;



public class UpdateTopicRuleDestinationResponse {
    public Object conflictingResourceUpdateException;
    public UpdateTopicRuleDestinationResponse withConflictingResourceUpdateException(Object conflictingResourceUpdateException) {
        this.conflictingResourceUpdateException = conflictingResourceUpdateException;
        return this;
    }
    public String contentType;
    public UpdateTopicRuleDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateTopicRuleDestinationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateTopicRuleDestinationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public UpdateTopicRuleDestinationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateTopicRuleDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateTopicRuleDestinationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public java.util.Map<String, Object> updateTopicRuleDestinationResponse;
    public UpdateTopicRuleDestinationResponse withUpdateTopicRuleDestinationResponse(java.util.Map<String, Object> updateTopicRuleDestinationResponse) {
        this.updateTopicRuleDestinationResponse = updateTopicRuleDestinationResponse;
        return this;
    }
}