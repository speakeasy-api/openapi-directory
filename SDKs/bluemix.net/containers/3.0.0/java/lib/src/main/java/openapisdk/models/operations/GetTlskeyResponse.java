package openapisdk.models.operations;



public class GetTlskeyResponse {
    public openapisdk.models.shared.Certificate certificate;
    public GetTlskeyResponse withCertificate(openapisdk.models.shared.Certificate certificate) {
        this.certificate = certificate;
        return this;
    }
    public String contentType;
    public GetTlskeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTlskeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}