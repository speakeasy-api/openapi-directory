package openapisdk.models.operations;



public class GetPutWarmPoolResponse {
    public byte[] body;
    public GetPutWarmPoolResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPutWarmPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPutWarmPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}