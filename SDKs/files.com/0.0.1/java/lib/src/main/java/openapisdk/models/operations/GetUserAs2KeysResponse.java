package openapisdk.models.operations;



public class GetUserAs2KeysResponse {
    public openapisdk.models.shared.As2KeyEntity[] as2KeyEntities;
    public GetUserAs2KeysResponse withAs2KeyEntities(openapisdk.models.shared.As2KeyEntity[] as2KeyEntities) {
        this.as2KeyEntities = as2KeyEntities;
        return this;
    }
    public String contentType;
    public GetUserAs2KeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserAs2KeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}