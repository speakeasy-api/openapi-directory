package openapisdk.models.operations;



public class PostClickwrapsResponse {
    public openapisdk.models.shared.ClickwrapEntity clickwrapEntity;
    public PostClickwrapsResponse withClickwrapEntity(openapisdk.models.shared.ClickwrapEntity clickwrapEntity) {
        this.clickwrapEntity = clickwrapEntity;
        return this;
    }
    public String contentType;
    public PostClickwrapsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostClickwrapsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}