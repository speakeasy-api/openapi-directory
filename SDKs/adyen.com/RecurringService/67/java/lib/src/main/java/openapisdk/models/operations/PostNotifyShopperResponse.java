package openapisdk.models.operations;



public class PostNotifyShopperResponse {
    public String contentType;
    public PostNotifyShopperResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notifyShopperResult;
    public PostNotifyShopperResponse withNotifyShopperResult(Object notifyShopperResult) {
        this.notifyShopperResult = notifyShopperResult;
        return this;
    }
    public Object serviceError;
    public PostNotifyShopperResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostNotifyShopperResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}