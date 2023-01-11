package openapisdk.models.operations;



public class GetDealerRvIdResponse {
    public String contentType;
    public GetDealerRvIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dealer dealer;
    public GetDealerRvIdResponse withDealer(openapisdk.models.shared.Dealer dealer) {
        this.dealer = dealer;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetDealerRvIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetDealerRvIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}