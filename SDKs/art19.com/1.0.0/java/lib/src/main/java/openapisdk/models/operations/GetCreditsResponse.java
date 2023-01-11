package openapisdk.models.operations;



public class GetCreditsResponse {
    public String contentType;
    public GetCreditsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCreditsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCreditsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCredits200ApplicationVndApiPlusJson getCredits200ApplicationVndApiPlusJsonObject;
    public GetCreditsResponse withGetCredits200ApplicationVndApiPlusJsonObject(GetCredits200ApplicationVndApiPlusJson getCredits200ApplicationVndApiPlusJsonObject) {
        this.getCredits200ApplicationVndApiPlusJsonObject = getCredits200ApplicationVndApiPlusJsonObject;
        return this;
    }
    public GetCredits400ApplicationVndApiPlusJson getCredits400ApplicationVndApiPlusJsonObject;
    public GetCreditsResponse withGetCredits400ApplicationVndApiPlusJsonObject(GetCredits400ApplicationVndApiPlusJson getCredits400ApplicationVndApiPlusJsonObject) {
        this.getCredits400ApplicationVndApiPlusJsonObject = getCredits400ApplicationVndApiPlusJsonObject;
        return this;
    }
}