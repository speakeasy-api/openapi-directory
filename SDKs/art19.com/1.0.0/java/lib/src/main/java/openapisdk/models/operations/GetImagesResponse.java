package openapisdk.models.operations;



public class GetImagesResponse {
    public String contentType;
    public GetImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetImagesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetImages200ApplicationVndApiPlusJson getImages200ApplicationVndApiPlusJsonObject;
    public GetImagesResponse withGetImages200ApplicationVndApiPlusJsonObject(GetImages200ApplicationVndApiPlusJson getImages200ApplicationVndApiPlusJsonObject) {
        this.getImages200ApplicationVndApiPlusJsonObject = getImages200ApplicationVndApiPlusJsonObject;
        return this;
    }
    public GetImages400ApplicationVndApiPlusJson getImages400ApplicationVndApiPlusJsonObject;
    public GetImagesResponse withGetImages400ApplicationVndApiPlusJsonObject(GetImages400ApplicationVndApiPlusJson getImages400ApplicationVndApiPlusJsonObject) {
        this.getImages400ApplicationVndApiPlusJsonObject = getImages400ApplicationVndApiPlusJsonObject;
        return this;
    }
}