package openapisdk.models.operations;



public class GetEpisodesResponse {
    public String contentType;
    public GetEpisodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEpisodesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEpisodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetEpisodes200ApplicationVndApiPlusJson getEpisodes200ApplicationVndApiPlusJsonObject;
    public GetEpisodesResponse withGetEpisodes200ApplicationVndApiPlusJsonObject(GetEpisodes200ApplicationVndApiPlusJson getEpisodes200ApplicationVndApiPlusJsonObject) {
        this.getEpisodes200ApplicationVndApiPlusJsonObject = getEpisodes200ApplicationVndApiPlusJsonObject;
        return this;
    }
    public GetEpisodes400ApplicationVndApiPlusJson getEpisodes400ApplicationVndApiPlusJsonObject;
    public GetEpisodesResponse withGetEpisodes400ApplicationVndApiPlusJsonObject(GetEpisodes400ApplicationVndApiPlusJson getEpisodes400ApplicationVndApiPlusJsonObject) {
        this.getEpisodes400ApplicationVndApiPlusJsonObject = getEpisodes400ApplicationVndApiPlusJsonObject;
        return this;
    }
}