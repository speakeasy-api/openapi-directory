package openapisdk.models.operations;



public class GetSeasonsIdResponse {
    public String contentType;
    public GetSeasonsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSeasonsIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSeasonsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSeasonsId200ApplicationVndApiPlusJson getSeasonsId200ApplicationVndApiPlusJsonObject;
    public GetSeasonsIdResponse withGetSeasonsId200ApplicationVndApiPlusJsonObject(GetSeasonsId200ApplicationVndApiPlusJson getSeasonsId200ApplicationVndApiPlusJsonObject) {
        this.getSeasonsId200ApplicationVndApiPlusJsonObject = getSeasonsId200ApplicationVndApiPlusJsonObject;
        return this;
    }
}