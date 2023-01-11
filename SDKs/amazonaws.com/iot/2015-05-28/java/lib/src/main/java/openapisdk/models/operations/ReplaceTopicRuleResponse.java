package openapisdk.models.operations;



public class ReplaceTopicRuleResponse {
    public Object conflictingResourceUpdateException;
    public ReplaceTopicRuleResponse withConflictingResourceUpdateException(Object conflictingResourceUpdateException) {
        this.conflictingResourceUpdateException = conflictingResourceUpdateException;
        return this;
    }
    public String contentType;
    public ReplaceTopicRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ReplaceTopicRuleResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public ReplaceTopicRuleResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public ReplaceTopicRuleResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Object sqlParseException;
    public ReplaceTopicRuleResponse withSqlParseException(Object sqlParseException) {
        this.sqlParseException = sqlParseException;
        return this;
    }
    public Long statusCode;
    public ReplaceTopicRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ReplaceTopicRuleResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}