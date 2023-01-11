package openapisdk.models.operations;



public class GetModifyCertificatesResponse {
    public byte[] body;
    public GetModifyCertificatesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetModifyCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetModifyCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}