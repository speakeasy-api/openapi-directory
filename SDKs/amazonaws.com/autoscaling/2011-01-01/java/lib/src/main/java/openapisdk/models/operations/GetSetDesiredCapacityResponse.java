package openapisdk.models.operations;



public class GetSetDesiredCapacityResponse {
    public byte[] body;
    public GetSetDesiredCapacityResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSetDesiredCapacityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetDesiredCapacityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}