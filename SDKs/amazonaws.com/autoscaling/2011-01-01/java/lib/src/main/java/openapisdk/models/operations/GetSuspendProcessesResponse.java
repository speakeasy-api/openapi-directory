package openapisdk.models.operations;



public class GetSuspendProcessesResponse {
    public byte[] body;
    public GetSuspendProcessesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSuspendProcessesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSuspendProcessesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}