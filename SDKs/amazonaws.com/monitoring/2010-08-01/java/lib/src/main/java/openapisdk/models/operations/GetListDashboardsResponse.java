package openapisdk.models.operations;



public class GetListDashboardsResponse {
    public byte[] body;
    public GetListDashboardsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListDashboardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListDashboardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}