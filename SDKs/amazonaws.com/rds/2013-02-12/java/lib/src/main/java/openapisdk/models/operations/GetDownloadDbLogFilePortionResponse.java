package openapisdk.models.operations;



public class GetDownloadDbLogFilePortionResponse {
    public byte[] body;
    public GetDownloadDbLogFilePortionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDownloadDbLogFilePortionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDownloadDbLogFilePortionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}