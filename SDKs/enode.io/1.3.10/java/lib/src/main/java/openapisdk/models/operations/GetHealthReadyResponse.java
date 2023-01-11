package openapisdk.models.operations;



public class GetHealthReadyResponse {
    public String contentType;
    public GetHealthReadyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetHealthReadyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getHealthReady503ApplicationJSONString;
    public GetHealthReadyResponse withGetHealthReady503ApplicationJsonString(String getHealthReady503ApplicationJSONString) {
        this.getHealthReady503ApplicationJSONString = getHealthReady503ApplicationJSONString;
        return this;
    }
}