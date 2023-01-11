package openapisdk.models.operations;



public class GetListDeadLetterSourceQueuesResponse {
    public byte[] body;
    public GetListDeadLetterSourceQueuesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListDeadLetterSourceQueuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListDeadLetterSourceQueuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}