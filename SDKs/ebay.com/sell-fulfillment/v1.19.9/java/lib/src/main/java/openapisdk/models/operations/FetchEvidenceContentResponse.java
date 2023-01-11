package openapisdk.models.operations;



public class FetchEvidenceContentResponse {
    public byte[] body;
    public FetchEvidenceContentResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public FetchEvidenceContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEvidenceContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}