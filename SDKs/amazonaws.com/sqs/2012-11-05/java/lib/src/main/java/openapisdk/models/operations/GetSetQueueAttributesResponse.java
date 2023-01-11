package openapisdk.models.operations;



public class GetSetQueueAttributesResponse {
    public byte[] body;
    public GetSetQueueAttributesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSetQueueAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetQueueAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}