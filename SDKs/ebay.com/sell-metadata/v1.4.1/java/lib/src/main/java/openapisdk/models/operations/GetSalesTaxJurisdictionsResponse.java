package openapisdk.models.operations;



public class GetSalesTaxJurisdictionsResponse {
    public String contentType;
    public GetSalesTaxJurisdictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SalesTaxJurisdictions salesTaxJurisdictions;
    public GetSalesTaxJurisdictionsResponse withSalesTaxJurisdictions(openapisdk.models.shared.SalesTaxJurisdictions salesTaxJurisdictions) {
        this.salesTaxJurisdictions = salesTaxJurisdictions;
        return this;
    }
    public Long statusCode;
    public GetSalesTaxJurisdictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}