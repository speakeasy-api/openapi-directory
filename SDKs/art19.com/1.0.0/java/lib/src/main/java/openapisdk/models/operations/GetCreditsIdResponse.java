package openapisdk.models.operations;



public class GetCreditsIdResponse {
    public String contentType;
    public GetCreditsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCreditsIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCreditsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCreditsId200ApplicationVndApiPlusJson getCreditsId200ApplicationVndApiPlusJsonObject;
    public GetCreditsIdResponse withGetCreditsId200ApplicationVndApiPlusJsonObject(GetCreditsId200ApplicationVndApiPlusJson getCreditsId200ApplicationVndApiPlusJsonObject) {
        this.getCreditsId200ApplicationVndApiPlusJsonObject = getCreditsId200ApplicationVndApiPlusJsonObject;
        return this;
    }
}