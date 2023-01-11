package openapisdk.models.operations;



public class PostDownloadDbLogFilePortionResponse {
    public byte[] body;
    public PostDownloadDbLogFilePortionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDownloadDbLogFilePortionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDownloadDbLogFilePortionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}