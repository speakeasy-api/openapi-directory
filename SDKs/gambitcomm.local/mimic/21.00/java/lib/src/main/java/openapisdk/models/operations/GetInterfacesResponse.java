package openapisdk.models.operations;



public class GetInterfacesResponse {
    public String contentType;
    public GetInterfacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInterfacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> getInterfaces200ApplicationJSONObject;
    public GetInterfacesResponse withGetInterfaces200ApplicationJsonObject(java.util.Map<String, Integer> getInterfaces200ApplicationJSONObject) {
        this.getInterfaces200ApplicationJSONObject = getInterfaces200ApplicationJSONObject;
        return this;
    }
}