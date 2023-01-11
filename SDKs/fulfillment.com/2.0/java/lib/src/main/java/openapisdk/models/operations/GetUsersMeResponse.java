package openapisdk.models.operations;



public class GetUsersMeResponse {
    public String contentType;
    public GetUsersMeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersMeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUsersMeUserContactV2 userContactV2;
    public GetUsersMeResponse withUserContactV2(GetUsersMeUserContactV2 userContactV2) {
        this.userContactV2 = userContactV2;
        return this;
    }
}