package openapisdk.models.operations;



public class PostOriginKeysResponse {
    public Object checkoutUtilityResponse;
    public PostOriginKeysResponse withCheckoutUtilityResponse(Object checkoutUtilityResponse) {
        this.checkoutUtilityResponse = checkoutUtilityResponse;
        return this;
    }
    public String contentType;
    public PostOriginKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostOriginKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}