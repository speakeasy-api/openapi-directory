package openapisdk.models.operations;



public class SendOfferToInterestedBuyersResponse {
    public String contentType;
    public SendOfferToInterestedBuyersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SendOfferToInterestedBuyersCollectionResponse sendOfferToInterestedBuyersCollectionResponse;
    public SendOfferToInterestedBuyersResponse withSendOfferToInterestedBuyersCollectionResponse(openapisdk.models.shared.SendOfferToInterestedBuyersCollectionResponse sendOfferToInterestedBuyersCollectionResponse) {
        this.sendOfferToInterestedBuyersCollectionResponse = sendOfferToInterestedBuyersCollectionResponse;
        return this;
    }
    public Long statusCode;
    public SendOfferToInterestedBuyersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}