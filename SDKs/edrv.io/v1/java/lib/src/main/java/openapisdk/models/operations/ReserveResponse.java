package openapisdk.models.operations;



public class ReserveResponse {
    public String contentType;
    public ReserveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReserveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Reserve201ApplicationJson reserve201ApplicationJSONObject;
    public ReserveResponse withReserve201ApplicationJsonObject(Reserve201ApplicationJson reserve201ApplicationJSONObject) {
        this.reserve201ApplicationJSONObject = reserve201ApplicationJSONObject;
        return this;
    }
}