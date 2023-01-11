package openapisdk.models.operations;



public class CancelCertificateTransferRequest {
    public CancelCertificateTransferPathParams pathParams;
    public CancelCertificateTransferRequest withPathParams(CancelCertificateTransferPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CancelCertificateTransferHeaders headers;
    public CancelCertificateTransferRequest withHeaders(CancelCertificateTransferHeaders headers) {
        this.headers = headers;
        return this;
    }
}