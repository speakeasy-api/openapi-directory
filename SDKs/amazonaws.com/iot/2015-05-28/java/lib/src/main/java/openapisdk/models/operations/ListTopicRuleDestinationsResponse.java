package openapisdk.models.operations;



public class ListTopicRuleDestinationsResponse {
    public String contentType;
    public ListTopicRuleDestinationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListTopicRuleDestinationsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public ListTopicRuleDestinationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListTopicRuleDestinationsResponse listTopicRuleDestinationsResponse;
    public ListTopicRuleDestinationsResponse withListTopicRuleDestinationsResponse(openapisdk.models.shared.ListTopicRuleDestinationsResponse listTopicRuleDestinationsResponse) {
        this.listTopicRuleDestinationsResponse = listTopicRuleDestinationsResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListTopicRuleDestinationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListTopicRuleDestinationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListTopicRuleDestinationsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}