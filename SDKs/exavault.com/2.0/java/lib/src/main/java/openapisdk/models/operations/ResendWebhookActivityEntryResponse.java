package openapisdk.models.operations;



public class ResendWebhookActivityEntryResponse {
    public String contentType;
    public ResendWebhookActivityEntryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmptyResponse emptyResponse;
    public ResendWebhookActivityEntryResponse withEmptyResponse(openapisdk.models.shared.EmptyResponse emptyResponse) {
        this.emptyResponse = emptyResponse;
        return this;
    }
    public Long statusCode;
    public ResendWebhookActivityEntryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}