package openapisdk.models.operations;



public class GetListofCardsResponse {
    public GetListofCardsCards cards;
    public GetListofCardsResponse withCards(GetListofCardsCards cards) {
        this.cards = cards;
        return this;
    }
    public String contentType;
    public GetListofCardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListofCardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}