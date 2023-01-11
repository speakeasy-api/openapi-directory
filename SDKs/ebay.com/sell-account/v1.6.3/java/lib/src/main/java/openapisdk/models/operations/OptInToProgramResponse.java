package openapisdk.models.operations;



public class OptInToProgramResponse {
    public String contentType;
    public OptInToProgramResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OptInToProgramResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> optInToProgram200ApplicationJSONObject;
    public OptInToProgramResponse withOptInToProgram200ApplicationJsonObject(java.util.Map<String, Object> optInToProgram200ApplicationJSONObject) {
        this.optInToProgram200ApplicationJSONObject = optInToProgram200ApplicationJSONObject;
        return this;
    }
}