package openapisdk.models.operations;



public class GetMediaAssetsIdResponse {
    public String contentType;
    public GetMediaAssetsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMediaAssetsIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetMediaAssetsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetMediaAssetsId200ApplicationVndApiPlusJson getMediaAssetsId200ApplicationVndApiPlusJsonObject;
    public GetMediaAssetsIdResponse withGetMediaAssetsId200ApplicationVndApiPlusJsonObject(GetMediaAssetsId200ApplicationVndApiPlusJson getMediaAssetsId200ApplicationVndApiPlusJsonObject) {
        this.getMediaAssetsId200ApplicationVndApiPlusJsonObject = getMediaAssetsId200ApplicationVndApiPlusJsonObject;
        return this;
    }
}