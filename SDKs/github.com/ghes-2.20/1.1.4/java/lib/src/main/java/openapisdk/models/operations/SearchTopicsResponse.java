package openapisdk.models.operations;



public class SearchTopicsResponse {
    public String contentType;
    public SearchTopicsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchTopicsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SearchTopics200ApplicationJson searchTopics200ApplicationJSONObject;
    public SearchTopicsResponse withSearchTopics200ApplicationJsonObject(SearchTopics200ApplicationJson searchTopics200ApplicationJSONObject) {
        this.searchTopics200ApplicationJSONObject = searchTopics200ApplicationJSONObject;
        return this;
    }
    public SearchTopics415ApplicationJson searchTopics415ApplicationJSONObject;
    public SearchTopicsResponse withSearchTopics415ApplicationJsonObject(SearchTopics415ApplicationJson searchTopics415ApplicationJSONObject) {
        this.searchTopics415ApplicationJSONObject = searchTopics415ApplicationJSONObject;
        return this;
    }
}