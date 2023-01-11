package openapisdk.models.operations;



public class GetSalesTaxesResponse {
    public String contentType;
    public GetSalesTaxesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SalesTaxes salesTaxes;
    public GetSalesTaxesResponse withSalesTaxes(openapisdk.models.shared.SalesTaxes salesTaxes) {
        this.salesTaxes = salesTaxes;
        return this;
    }
    public Long statusCode;
    public GetSalesTaxesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}