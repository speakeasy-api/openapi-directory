package openapisdk.models.operations;



public class GetWehooksListResponse {
    public String contentType;
    public GetWehooksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWehooksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookCollectionResponse webhookCollectionResponse;
    public GetWehooksListResponse withWebhookCollectionResponse(openapisdk.models.shared.WebhookCollectionResponse webhookCollectionResponse) {
        this.webhookCollectionResponse = webhookCollectionResponse;
        return this;
    }
}