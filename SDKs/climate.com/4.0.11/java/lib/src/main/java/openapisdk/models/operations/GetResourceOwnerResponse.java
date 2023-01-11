package openapisdk.models.operations;



public class GetResourceOwnerResponse {
    public String contentType;
    public GetResourceOwnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetResourceOwnerResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetResourceOwnerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ResourceOwner resourceOwner;
    public GetResourceOwnerResponse withResourceOwner(openapisdk.models.shared.ResourceOwner resourceOwner) {
        this.resourceOwner = resourceOwner;
        return this;
    }
    public Long statusCode;
    public GetResourceOwnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}