package openapisdk.models.operations;



public class GetMediaAssetsResponse {
    public String contentType;
    public GetMediaAssetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMediaAssetsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetMediaAssetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetMediaAssets200ApplicationVndApiPlusJson getMediaAssets200ApplicationVndApiPlusJsonObject;
    public GetMediaAssetsResponse withGetMediaAssets200ApplicationVndApiPlusJsonObject(GetMediaAssets200ApplicationVndApiPlusJson getMediaAssets200ApplicationVndApiPlusJsonObject) {
        this.getMediaAssets200ApplicationVndApiPlusJsonObject = getMediaAssets200ApplicationVndApiPlusJsonObject;
        return this;
    }
    public GetMediaAssets400ApplicationVndApiPlusJson getMediaAssets400ApplicationVndApiPlusJsonObject;
    public GetMediaAssetsResponse withGetMediaAssets400ApplicationVndApiPlusJsonObject(GetMediaAssets400ApplicationVndApiPlusJson getMediaAssets400ApplicationVndApiPlusJsonObject) {
        this.getMediaAssets400ApplicationVndApiPlusJsonObject = getMediaAssets400ApplicationVndApiPlusJsonObject;
        return this;
    }
}