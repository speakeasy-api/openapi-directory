package openapisdk.models.operations;



public class PauseNowResponse {
    public String contentType;
    public PauseNowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PauseNowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String pauseNow200ApplicationJSONString;
    public PauseNowResponse withPauseNow200ApplicationJsonString(String pauseNow200ApplicationJSONString) {
        this.pauseNow200ApplicationJSONString = pauseNow200ApplicationJSONString;
        return this;
    }
}