package openapisdk.models.operations;



public class PostAs2KeysResponse {
    public openapisdk.models.shared.As2KeyEntity as2KeyEntity;
    public PostAs2KeysResponse withAs2KeyEntity(openapisdk.models.shared.As2KeyEntity as2KeyEntity) {
        this.as2KeyEntity = as2KeyEntity;
        return this;
    }
    public String contentType;
    public PostAs2KeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAs2KeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}