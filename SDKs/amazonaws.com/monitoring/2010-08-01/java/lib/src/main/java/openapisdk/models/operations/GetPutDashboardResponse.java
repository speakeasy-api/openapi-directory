package openapisdk.models.operations;



public class GetPutDashboardResponse {
    public byte[] body;
    public GetPutDashboardResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPutDashboardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPutDashboardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}