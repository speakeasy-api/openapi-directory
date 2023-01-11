package openapisdk.models.operations;



public class GetDeleteDbProxyResponse {
    public byte[] body;
    public GetDeleteDbProxyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteDbProxyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteDbProxyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}