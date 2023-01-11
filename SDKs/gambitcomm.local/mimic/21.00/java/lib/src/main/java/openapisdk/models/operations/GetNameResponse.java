package openapisdk.models.operations;



public class GetNameResponse {
    public String contentType;
    public GetNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getName200ApplicationJSONString;
    public GetNameResponse withGetName200ApplicationJsonString(String getName200ApplicationJSONString) {
        this.getName200ApplicationJSONString = getName200ApplicationJSONString;
        return this;
    }
}