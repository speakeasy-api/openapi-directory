package openapisdk.models.operations;



public class GetSalesCountResponse {
    public String contentType;
    public GetSalesCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSalesCountResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Sales sales;
    public GetSalesCountResponse withSales(openapisdk.models.shared.Sales sales) {
        this.sales = sales;
        return this;
    }
    public Long statusCode;
    public GetSalesCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}