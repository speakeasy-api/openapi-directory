package openapisdk.models.operations;



public class PostQueryResponse {
    public String contentType;
    public PostQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String postQueryDefaultApplicationJSONString;
    public PostQueryResponse withPostQueryDefaultApplicationJsonString(String postQueryDefaultApplicationJSONString) {
        this.postQueryDefaultApplicationJSONString = postQueryDefaultApplicationJSONString;
        return this;
    }
}