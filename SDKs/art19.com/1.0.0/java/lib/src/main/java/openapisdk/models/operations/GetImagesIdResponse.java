package openapisdk.models.operations;



public class GetImagesIdResponse {
    public String contentType;
    public GetImagesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetImagesIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetImagesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetImagesId200ApplicationVndApiPlusJson getImagesId200ApplicationVndApiPlusJsonObject;
    public GetImagesIdResponse withGetImagesId200ApplicationVndApiPlusJsonObject(GetImagesId200ApplicationVndApiPlusJson getImagesId200ApplicationVndApiPlusJsonObject) {
        this.getImagesId200ApplicationVndApiPlusJsonObject = getImagesId200ApplicationVndApiPlusJsonObject;
        return this;
    }
}