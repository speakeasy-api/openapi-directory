package openapisdk.models.operations;



public class GetCityResponse {
    public String contentType;
    public GetCityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getCity200ApplicationJSONString;
    public GetCityResponse withGetCity200ApplicationJsonString(String getCity200ApplicationJSONString) {
        this.getCity200ApplicationJSONString = getCity200ApplicationJSONString;
        return this;
    }
}