package openapisdk.models.operations;



public class TopicTopicTopicNameGetResponse {
    public String contentType;
    public TopicTopicTopicNameGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public TopicTopicTopicNameGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public TopicTopicTopicNameGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object topicTopicTopicNameGet200ApplicationJSONAny;
    public TopicTopicTopicNameGetResponse withTopicTopicTopicNameGet200ApplicationJsonAny(Object topicTopicTopicNameGet200ApplicationJSONAny) {
        this.topicTopicTopicNameGet200ApplicationJSONAny = topicTopicTopicNameGet200ApplicationJSONAny;
        return this;
    }
}