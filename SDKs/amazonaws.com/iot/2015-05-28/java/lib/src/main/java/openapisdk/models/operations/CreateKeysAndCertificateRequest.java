package openapisdk.models.operations;



public class CreateKeysAndCertificateRequest {
    public CreateKeysAndCertificateQueryParams queryParams;
    public CreateKeysAndCertificateRequest withQueryParams(CreateKeysAndCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateKeysAndCertificateHeaders headers;
    public CreateKeysAndCertificateRequest withHeaders(CreateKeysAndCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
}