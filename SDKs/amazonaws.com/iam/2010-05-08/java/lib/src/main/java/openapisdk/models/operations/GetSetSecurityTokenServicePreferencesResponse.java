package openapisdk.models.operations;



public class GetSetSecurityTokenServicePreferencesResponse {
    public byte[] body;
    public GetSetSecurityTokenServicePreferencesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSetSecurityTokenServicePreferencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetSecurityTokenServicePreferencesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}