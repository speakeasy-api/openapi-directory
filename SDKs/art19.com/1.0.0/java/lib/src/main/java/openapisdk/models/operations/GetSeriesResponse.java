package openapisdk.models.operations;



public class GetSeriesResponse {
    public String contentType;
    public GetSeriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSeriesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSeriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSeries200ApplicationVndApiPlusJson getSeries200ApplicationVndApiPlusJsonObject;
    public GetSeriesResponse withGetSeries200ApplicationVndApiPlusJsonObject(GetSeries200ApplicationVndApiPlusJson getSeries200ApplicationVndApiPlusJsonObject) {
        this.getSeries200ApplicationVndApiPlusJsonObject = getSeries200ApplicationVndApiPlusJsonObject;
        return this;
    }
    public GetSeries400ApplicationVndApiPlusJson getSeries400ApplicationVndApiPlusJsonObject;
    public GetSeriesResponse withGetSeries400ApplicationVndApiPlusJsonObject(GetSeries400ApplicationVndApiPlusJson getSeries400ApplicationVndApiPlusJsonObject) {
        this.getSeries400ApplicationVndApiPlusJsonObject = getSeries400ApplicationVndApiPlusJsonObject;
        return this;
    }
}