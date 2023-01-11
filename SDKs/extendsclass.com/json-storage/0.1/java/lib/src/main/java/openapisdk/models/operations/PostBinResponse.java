package openapisdk.models.operations;



public class PostBinResponse {
    public String contentType;
    public PostBinResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object createStatus;
    public PostBinResponse withCreateStatus(Object createStatus) {
        this.createStatus = createStatus;
        return this;
    }
    public Object error;
    public PostBinResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostBinResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}