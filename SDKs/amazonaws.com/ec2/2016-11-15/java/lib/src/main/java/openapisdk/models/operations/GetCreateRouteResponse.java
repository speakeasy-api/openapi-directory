package openapisdk.models.operations;



public class GetCreateRouteResponse {
    public byte[] body;
    public GetCreateRouteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCreateRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCreateRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}