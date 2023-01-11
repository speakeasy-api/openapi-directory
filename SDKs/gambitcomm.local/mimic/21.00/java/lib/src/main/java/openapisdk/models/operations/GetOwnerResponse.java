package openapisdk.models.operations;



public class GetOwnerResponse {
    public String contentType;
    public GetOwnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOwnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getOwner200ApplicationJSONString;
    public GetOwnerResponse withGetOwner200ApplicationJsonString(String getOwner200ApplicationJSONString) {
        this.getOwner200ApplicationJSONString = getOwner200ApplicationJSONString;
        return this;
    }
}