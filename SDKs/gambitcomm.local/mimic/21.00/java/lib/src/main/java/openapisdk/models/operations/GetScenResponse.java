package openapisdk.models.operations;



public class GetScenResponse {
    public String contentType;
    public GetScenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetScenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer getScen200ApplicationJSONInt32Integer;
    public GetScenResponse withGetScen200ApplicationJsonInt32Integer(Integer getScen200ApplicationJSONInt32Integer) {
        this.getScen200ApplicationJSONInt32Integer = getScen200ApplicationJSONInt32Integer;
        return this;
    }
}