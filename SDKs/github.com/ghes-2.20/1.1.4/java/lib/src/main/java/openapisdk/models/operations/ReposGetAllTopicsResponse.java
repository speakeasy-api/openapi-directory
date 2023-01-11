package openapisdk.models.operations;



public class ReposGetAllTopicsResponse {
    public String contentType;
    public ReposGetAllTopicsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetAllTopicsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetAllTopicsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public ReposGetAllTopics415ApplicationJson reposGetAllTopics415ApplicationJSONObject;
    public ReposGetAllTopicsResponse withReposGetAllTopics415ApplicationJsonObject(ReposGetAllTopics415ApplicationJson reposGetAllTopics415ApplicationJSONObject) {
        this.reposGetAllTopics415ApplicationJSONObject = reposGetAllTopics415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Topic topic;
    public ReposGetAllTopicsResponse withTopic(openapisdk.models.shared.Topic topic) {
        this.topic = topic;
        return this;
    }
}