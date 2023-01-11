package openapisdk.models.operations;



public class GetBarcodeEncodeRequest {
    public GetBarcodeEncodeQueryParams queryParams;
    public GetBarcodeEncodeRequest withQueryParams(GetBarcodeEncodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetBarcodeEncodeSecurity security;
    public GetBarcodeEncodeRequest withSecurity(GetBarcodeEncodeSecurity security) {
        this.security = security;
        return this;
    }
}