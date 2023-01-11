package openapisdk.models.operations;



public class GetResultFileResponse {
    public byte[] body;
    public GetResultFileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetResultFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetResultFileResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetResultFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}