package openapisdk.models.operations;



public class CreateNewCardResponse {
    public String contentType;
    public CreateNewCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public CreateNewCardNewCardResponse newCardResponse;
    public CreateNewCardResponse withNewCardResponse(CreateNewCardNewCardResponse newCardResponse) {
        this.newCardResponse = newCardResponse;
        return this;
    }
    public Long statusCode;
    public CreateNewCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}