package openapisdk.models.operations;



public class GetAs2KeysIdResponse {
    public openapisdk.models.shared.As2KeyEntity as2KeyEntity;
    public GetAs2KeysIdResponse withAs2KeyEntity(openapisdk.models.shared.As2KeyEntity as2KeyEntity) {
        this.as2KeyEntity = as2KeyEntity;
        return this;
    }
    public String contentType;
    public GetAs2KeysIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAs2KeysIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}