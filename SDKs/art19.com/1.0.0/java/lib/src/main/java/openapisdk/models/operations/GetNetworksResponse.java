package openapisdk.models.operations;



public class GetNetworksResponse {
    public String contentType;
    public GetNetworksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworksResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetNetworks200ApplicationVndApiPlusJson getNetworks200ApplicationVndApiPlusJsonObject;
    public GetNetworksResponse withGetNetworks200ApplicationVndApiPlusJsonObject(GetNetworks200ApplicationVndApiPlusJson getNetworks200ApplicationVndApiPlusJsonObject) {
        this.getNetworks200ApplicationVndApiPlusJsonObject = getNetworks200ApplicationVndApiPlusJsonObject;
        return this;
    }
    public GetNetworks400ApplicationVndApiPlusJson getNetworks400ApplicationVndApiPlusJsonObject;
    public GetNetworksResponse withGetNetworks400ApplicationVndApiPlusJsonObject(GetNetworks400ApplicationVndApiPlusJson getNetworks400ApplicationVndApiPlusJsonObject) {
        this.getNetworks400ApplicationVndApiPlusJsonObject = getNetworks400ApplicationVndApiPlusJsonObject;
        return this;
    }
}