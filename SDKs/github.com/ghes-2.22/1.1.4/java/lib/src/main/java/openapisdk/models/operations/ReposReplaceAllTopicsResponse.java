package openapisdk.models.operations;



public class ReposReplaceAllTopicsResponse {
    public String contentType;
    public ReposReplaceAllTopicsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposReplaceAllTopicsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposReplaceAllTopicsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public ReposReplaceAllTopics415ApplicationJson reposReplaceAllTopics415ApplicationJSONObject;
    public ReposReplaceAllTopicsResponse withReposReplaceAllTopics415ApplicationJsonObject(ReposReplaceAllTopics415ApplicationJson reposReplaceAllTopics415ApplicationJSONObject) {
        this.reposReplaceAllTopics415ApplicationJSONObject = reposReplaceAllTopics415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Topic topic;
    public ReposReplaceAllTopicsResponse withTopic(openapisdk.models.shared.Topic topic) {
        this.topic = topic;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorSimple validationErrorSimple;
    public ReposReplaceAllTopicsResponse withValidationErrorSimple(openapisdk.models.shared.ValidationErrorSimple validationErrorSimple) {
        this.validationErrorSimple = validationErrorSimple;
        return this;
    }
}