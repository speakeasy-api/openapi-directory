package openapisdk.models.operations;



public class GetTopicRuleDestinationResponse {
    public String contentType;
    public GetTopicRuleDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTopicRuleDestinationResponse getTopicRuleDestinationResponse;
    public GetTopicRuleDestinationResponse withGetTopicRuleDestinationResponse(openapisdk.models.shared.GetTopicRuleDestinationResponse getTopicRuleDestinationResponse) {
        this.getTopicRuleDestinationResponse = getTopicRuleDestinationResponse;
        return this;
    }
    public Object internalException;
    public GetTopicRuleDestinationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public GetTopicRuleDestinationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetTopicRuleDestinationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetTopicRuleDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetTopicRuleDestinationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}