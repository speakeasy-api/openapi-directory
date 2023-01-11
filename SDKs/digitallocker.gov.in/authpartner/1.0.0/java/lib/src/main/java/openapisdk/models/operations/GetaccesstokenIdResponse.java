package openapisdk.models.operations;



public class GetaccesstokenIdResponse {
    public openapisdk.models.shared.AccessResponse accessResponse;
    public GetaccesstokenIdResponse withAccessResponse(openapisdk.models.shared.AccessResponse accessResponse) {
        this.accessResponse = accessResponse;
        return this;
    }
    public String contentType;
    public GetaccesstokenIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetaccesstokenIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}