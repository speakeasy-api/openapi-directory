package openapisdk.models.operations;



public class GetNetworksIdResponse {
    public String contentType;
    public GetNetworksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworksIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetNetworksId200ApplicationVndApiPlusJson getNetworksId200ApplicationVndApiPlusJsonObject;
    public GetNetworksIdResponse withGetNetworksId200ApplicationVndApiPlusJsonObject(GetNetworksId200ApplicationVndApiPlusJson getNetworksId200ApplicationVndApiPlusJsonObject) {
        this.getNetworksId200ApplicationVndApiPlusJsonObject = getNetworksId200ApplicationVndApiPlusJsonObject;
        return this;
    }
}