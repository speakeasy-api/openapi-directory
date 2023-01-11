package openapisdk.models.operations;



public class GetAddonLinkersResponse {
    public String contentType;
    public GetAddonLinkersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAddonLinkersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetAddonLinkersResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}