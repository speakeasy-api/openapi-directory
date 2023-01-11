package openapisdk.models.operations;



public class GetValueResponse {
    public String contentType;
    public GetValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getValue200ApplicationJSONString;
    public GetValueResponse withGetValue200ApplicationJsonString(String getValue200ApplicationJSONString) {
        this.getValue200ApplicationJSONString = getValue200ApplicationJSONString;
        return this;
    }
}