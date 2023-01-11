package openapisdk.models.operations;



public class GetDealerResponse {
    public String contentType;
    public GetDealerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dealer dealer;
    public GetDealerResponse withDealer(openapisdk.models.shared.Dealer dealer) {
        this.dealer = dealer;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetDealerResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetDealerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}