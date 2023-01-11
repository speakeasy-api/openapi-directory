package openapisdk.models.operations;



public class GetSalesTaxResponse {
    public String contentType;
    public GetSalesTaxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SalesTax salesTax;
    public GetSalesTaxResponse withSalesTax(openapisdk.models.shared.SalesTax salesTax) {
        this.salesTax = salesTax;
        return this;
    }
    public Long statusCode;
    public GetSalesTaxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}