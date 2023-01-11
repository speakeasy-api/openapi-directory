package openapisdk.models.operations;



public class GetRecordsFormatResponse {
    public byte[] body;
    public GetRecordsFormatResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRecordsFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRecordsFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetRecordsFormat200ApplicationJson getRecordsFormat200ApplicationJSONObject;
    public GetRecordsFormatResponse withGetRecordsFormat200ApplicationJsonObject(GetRecordsFormat200ApplicationJson getRecordsFormat200ApplicationJSONObject) {
        this.getRecordsFormat200ApplicationJSONObject = getRecordsFormat200ApplicationJSONObject;
        return this;
    }
    public java.util.Map<String, Object> getRecordsFormat400ApplicationJSONObject;
    public GetRecordsFormatResponse withGetRecordsFormat400ApplicationJsonObject(java.util.Map<String, Object> getRecordsFormat400ApplicationJSONObject) {
        this.getRecordsFormat400ApplicationJSONObject = getRecordsFormat400ApplicationJSONObject;
        return this;
    }
    public java.util.Map<String, Object> getRecordsFormat403ApplicationJSONObject;
    public GetRecordsFormatResponse withGetRecordsFormat403ApplicationJsonObject(java.util.Map<String, Object> getRecordsFormat403ApplicationJSONObject) {
        this.getRecordsFormat403ApplicationJSONObject = getRecordsFormat403ApplicationJSONObject;
        return this;
    }
}