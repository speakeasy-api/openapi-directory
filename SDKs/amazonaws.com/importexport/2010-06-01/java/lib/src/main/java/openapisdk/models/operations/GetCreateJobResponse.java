package openapisdk.models.operations;



public class GetCreateJobResponse {
    public byte[] body;
    public GetCreateJobResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCreateJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCreateJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}