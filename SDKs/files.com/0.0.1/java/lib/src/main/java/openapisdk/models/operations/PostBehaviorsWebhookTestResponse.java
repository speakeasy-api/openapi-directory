package openapisdk.models.operations;



public class PostBehaviorsWebhookTestResponse {
    public String contentType;
    public PostBehaviorsWebhookTestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostBehaviorsWebhookTestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StatusEntity statusEntity;
    public PostBehaviorsWebhookTestResponse withStatusEntity(openapisdk.models.shared.StatusEntity statusEntity) {
        this.statusEntity = statusEntity;
        return this;
    }
}