package openapisdk.models.operations;



public class ListTopicRulesResponse {
    public String contentType;
    public ListTopicRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListTopicRulesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public ListTopicRulesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListTopicRulesResponse listTopicRulesResponse;
    public ListTopicRulesResponse withListTopicRulesResponse(openapisdk.models.shared.ListTopicRulesResponse listTopicRulesResponse) {
        this.listTopicRulesResponse = listTopicRulesResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListTopicRulesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListTopicRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}