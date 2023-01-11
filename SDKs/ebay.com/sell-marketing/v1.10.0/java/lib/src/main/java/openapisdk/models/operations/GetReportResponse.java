package openapisdk.models.operations;



public class GetReportResponse {
    public byte[] body;
    public GetReportResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}