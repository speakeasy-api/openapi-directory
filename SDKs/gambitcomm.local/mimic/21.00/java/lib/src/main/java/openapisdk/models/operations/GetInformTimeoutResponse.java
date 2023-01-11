package openapisdk.models.operations;



public class GetInformTimeoutResponse {
    public String contentType;
    public GetInformTimeoutResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInformTimeoutResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer getInformTimeout200ApplicationJSONInt32Integer;
    public GetInformTimeoutResponse withGetInformTimeout200ApplicationJsonInt32Integer(Integer getInformTimeout200ApplicationJSONInt32Integer) {
        this.getInformTimeout200ApplicationJSONInt32Integer = getInformTimeout200ApplicationJSONInt32Integer;
        return this;
    }
}