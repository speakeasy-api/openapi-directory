package openapisdk.models.operations;



public class GetSeasonsResponse {
    public String contentType;
    public GetSeasonsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSeasonsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSeasonsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSeasons200ApplicationVndApiPlusJson getSeasons200ApplicationVndApiPlusJsonObject;
    public GetSeasonsResponse withGetSeasons200ApplicationVndApiPlusJsonObject(GetSeasons200ApplicationVndApiPlusJson getSeasons200ApplicationVndApiPlusJsonObject) {
        this.getSeasons200ApplicationVndApiPlusJsonObject = getSeasons200ApplicationVndApiPlusJsonObject;
        return this;
    }
    public GetSeasons400ApplicationVndApiPlusJson getSeasons400ApplicationVndApiPlusJsonObject;
    public GetSeasonsResponse withGetSeasons400ApplicationVndApiPlusJsonObject(GetSeasons400ApplicationVndApiPlusJson getSeasons400ApplicationVndApiPlusJsonObject) {
        this.getSeasons400ApplicationVndApiPlusJsonObject = getSeasons400ApplicationVndApiPlusJsonObject;
        return this;
    }
}