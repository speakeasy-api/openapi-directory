package openapisdk.models.operations;



public class DeleteTopicRuleDestinationResponse {
    public Object conflictingResourceUpdateException;
    public DeleteTopicRuleDestinationResponse withConflictingResourceUpdateException(Object conflictingResourceUpdateException) {
        this.conflictingResourceUpdateException = conflictingResourceUpdateException;
        return this;
    }
    public String contentType;
    public DeleteTopicRuleDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTopicRuleDestinationResponse;
    public DeleteTopicRuleDestinationResponse withDeleteTopicRuleDestinationResponse(java.util.Map<String, Object> deleteTopicRuleDestinationResponse) {
        this.deleteTopicRuleDestinationResponse = deleteTopicRuleDestinationResponse;
        return this;
    }
    public Object internalException;
    public DeleteTopicRuleDestinationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteTopicRuleDestinationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteTopicRuleDestinationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteTopicRuleDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteTopicRuleDestinationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}