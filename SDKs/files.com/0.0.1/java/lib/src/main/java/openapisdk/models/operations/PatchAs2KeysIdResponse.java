package openapisdk.models.operations;



public class PatchAs2KeysIdResponse {
    public openapisdk.models.shared.As2KeyEntity as2KeyEntity;
    public PatchAs2KeysIdResponse withAs2KeyEntity(openapisdk.models.shared.As2KeyEntity as2KeyEntity) {
        this.as2KeyEntity = as2KeyEntity;
        return this;
    }
    public String contentType;
    public PatchAs2KeysIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchAs2KeysIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}