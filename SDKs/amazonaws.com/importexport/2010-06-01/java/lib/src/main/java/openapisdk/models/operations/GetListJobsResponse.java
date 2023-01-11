package openapisdk.models.operations;



public class GetListJobsResponse {
    public byte[] body;
    public GetListJobsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}