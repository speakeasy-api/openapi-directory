package openapisdk.models.operations;



public class PostDisableResponse {
    public String contentType;
    public PostDisableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object disableResult;
    public PostDisableResponse withDisableResult(Object disableResult) {
        this.disableResult = disableResult;
        return this;
    }
    public Long statusCode;
    public PostDisableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}