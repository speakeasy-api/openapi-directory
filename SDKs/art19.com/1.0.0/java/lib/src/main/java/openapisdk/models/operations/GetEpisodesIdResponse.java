package openapisdk.models.operations;



public class GetEpisodesIdResponse {
    public String contentType;
    public GetEpisodesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEpisodesIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEpisodesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetEpisodesId200ApplicationVndApiPlusJson getEpisodesId200ApplicationVndApiPlusJsonObject;
    public GetEpisodesIdResponse withGetEpisodesId200ApplicationVndApiPlusJsonObject(GetEpisodesId200ApplicationVndApiPlusJson getEpisodesId200ApplicationVndApiPlusJsonObject) {
        this.getEpisodesId200ApplicationVndApiPlusJsonObject = getEpisodesId200ApplicationVndApiPlusJsonObject;
        return this;
    }
}