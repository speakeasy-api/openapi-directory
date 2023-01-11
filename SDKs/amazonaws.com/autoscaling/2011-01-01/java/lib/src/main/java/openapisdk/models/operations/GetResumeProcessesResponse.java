package openapisdk.models.operations;



public class GetResumeProcessesResponse {
    public byte[] body;
    public GetResumeProcessesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetResumeProcessesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResumeProcessesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}