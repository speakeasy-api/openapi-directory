package openapisdk.models.operations;



public class GetUserExtensionsResponse {
    public String contentType;
    public GetUserExtensionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Extension[] extensions;
    public GetUserExtensionsResponse withExtensions(openapisdk.models.shared.Extension[] extensions) {
        this.extensions = extensions;
        return this;
    }
    public Long statusCode;
    public GetUserExtensionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}