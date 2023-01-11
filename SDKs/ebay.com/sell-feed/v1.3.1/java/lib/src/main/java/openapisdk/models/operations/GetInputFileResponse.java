package openapisdk.models.operations;



public class GetInputFileResponse {
    public byte[] body;
    public GetInputFileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetInputFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInputFileResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetInputFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}