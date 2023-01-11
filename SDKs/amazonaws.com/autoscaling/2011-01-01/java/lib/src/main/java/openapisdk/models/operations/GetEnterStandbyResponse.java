package openapisdk.models.operations;



public class GetEnterStandbyResponse {
    public byte[] body;
    public GetEnterStandbyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetEnterStandbyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEnterStandbyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}