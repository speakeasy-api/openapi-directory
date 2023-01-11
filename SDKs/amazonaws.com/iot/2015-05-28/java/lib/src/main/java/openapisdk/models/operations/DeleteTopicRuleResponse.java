package openapisdk.models.operations;



public class DeleteTopicRuleResponse {
    public Object conflictingResourceUpdateException;
    public DeleteTopicRuleResponse withConflictingResourceUpdateException(Object conflictingResourceUpdateException) {
        this.conflictingResourceUpdateException = conflictingResourceUpdateException;
        return this;
    }
    public String contentType;
    public DeleteTopicRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public DeleteTopicRuleResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteTopicRuleResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteTopicRuleResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteTopicRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteTopicRuleResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}