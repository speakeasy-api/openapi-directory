package openapisdk.models.operations;



public class AddFolderResponse {
    public String contentType;
    public AddFolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceResponse resourceResponse;
    public AddFolderResponse withResourceResponse(openapisdk.models.shared.ResourceResponse resourceResponse) {
        this.resourceResponse = resourceResponse;
        return this;
    }
    public Long statusCode;
    public AddFolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}