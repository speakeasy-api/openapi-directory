package openapisdk.models.operations;



public class GetAs2KeysResponse {
    public openapisdk.models.shared.As2KeyEntity[] as2KeyEntities;
    public GetAs2KeysResponse withAs2KeyEntities(openapisdk.models.shared.As2KeyEntity[] as2KeyEntities) {
        this.as2KeyEntities = as2KeyEntities;
        return this;
    }
    public String contentType;
    public GetAs2KeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAs2KeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}