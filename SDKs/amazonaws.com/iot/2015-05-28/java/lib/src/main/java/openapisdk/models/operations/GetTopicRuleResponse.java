package openapisdk.models.operations;



public class GetTopicRuleResponse {
    public String contentType;
    public GetTopicRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTopicRuleResponse getTopicRuleResponse;
    public GetTopicRuleResponse withGetTopicRuleResponse(openapisdk.models.shared.GetTopicRuleResponse getTopicRuleResponse) {
        this.getTopicRuleResponse = getTopicRuleResponse;
        return this;
    }
    public Object internalException;
    public GetTopicRuleResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public GetTopicRuleResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetTopicRuleResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetTopicRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetTopicRuleResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}