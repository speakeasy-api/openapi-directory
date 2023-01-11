package openapisdk.models.operations;



public class PostUserHerokuKeyResponse {
    public String contentType;
    public PostUserHerokuKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUserHerokuKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostUserHerokuKey403ApplicationJson postUserHerokuKey403ApplicationJSONObject;
    public PostUserHerokuKeyResponse withPostUserHerokuKey403ApplicationJsonObject(PostUserHerokuKey403ApplicationJson postUserHerokuKey403ApplicationJSONObject) {
        this.postUserHerokuKey403ApplicationJSONObject = postUserHerokuKey403ApplicationJSONObject;
        return this;
    }
}