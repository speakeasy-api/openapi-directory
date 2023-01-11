package openapisdk.models.operations;



public class GetSeriesIdResponse {
    public String contentType;
    public GetSeriesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSeriesIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSeriesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSeriesId200ApplicationVndApiPlusJson getSeriesId200ApplicationVndApiPlusJsonObject;
    public GetSeriesIdResponse withGetSeriesId200ApplicationVndApiPlusJsonObject(GetSeriesId200ApplicationVndApiPlusJson getSeriesId200ApplicationVndApiPlusJsonObject) {
        this.getSeriesId200ApplicationVndApiPlusJsonObject = getSeriesId200ApplicationVndApiPlusJsonObject;
        return this;
    }
}