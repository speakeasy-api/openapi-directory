package openapisdk.models.operations;



public class GetStateResponse {
    public String contentType;
    public GetStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getState200ApplicationJSONString;
    public GetStateResponse withGetState200ApplicationJsonString(String getState200ApplicationJSONString) {
        this.getState200ApplicationJSONString = getState200ApplicationJSONString;
        return this;
    }
}