package openapisdk.models.operations;



public class GetLatestResultFileResponse {
    public byte[] body;
    public GetLatestResultFileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetLatestResultFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetLatestResultFileResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetLatestResultFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}