package openapisdk.models.operations;



public class PostSiteTestWebhookResponse {
    public String contentType;
    public PostSiteTestWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSiteTestWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StatusEntity statusEntity;
    public PostSiteTestWebhookResponse withStatusEntity(openapisdk.models.shared.StatusEntity statusEntity) {
        this.statusEntity = statusEntity;
        return this;
    }
}