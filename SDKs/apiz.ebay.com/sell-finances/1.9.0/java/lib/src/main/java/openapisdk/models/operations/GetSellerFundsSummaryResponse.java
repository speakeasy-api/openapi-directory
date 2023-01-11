package openapisdk.models.operations;



public class GetSellerFundsSummaryResponse {
    public String contentType;
    public GetSellerFundsSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SellerFundsSummaryResponse sellerFundsSummaryResponse;
    public GetSellerFundsSummaryResponse withSellerFundsSummaryResponse(openapisdk.models.shared.SellerFundsSummaryResponse sellerFundsSummaryResponse) {
        this.sellerFundsSummaryResponse = sellerFundsSummaryResponse;
        return this;
    }
    public Long statusCode;
    public GetSellerFundsSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}