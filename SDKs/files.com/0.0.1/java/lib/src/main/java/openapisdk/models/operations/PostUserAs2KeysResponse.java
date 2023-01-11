package openapisdk.models.operations;



public class PostUserAs2KeysResponse {
    public openapisdk.models.shared.As2KeyEntity as2KeyEntity;
    public PostUserAs2KeysResponse withAs2KeyEntity(openapisdk.models.shared.As2KeyEntity as2KeyEntity) {
        this.as2KeyEntity = as2KeyEntity;
        return this;
    }
    public String contentType;
    public PostUserAs2KeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUserAs2KeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}