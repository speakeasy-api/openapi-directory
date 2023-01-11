package openapisdk.models.operations;



public class GetRestoreDbInstanceToPointInTimeResponse {
    public byte[] body;
    public GetRestoreDbInstanceToPointInTimeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRestoreDbInstanceToPointInTimeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRestoreDbInstanceToPointInTimeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}