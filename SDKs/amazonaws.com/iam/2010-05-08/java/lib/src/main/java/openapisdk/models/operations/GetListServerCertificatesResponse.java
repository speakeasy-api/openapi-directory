package openapisdk.models.operations;



public class GetListServerCertificatesResponse {
    public byte[] body;
    public GetListServerCertificatesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListServerCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListServerCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}