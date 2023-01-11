package openapisdk.models.operations;



public class CheckTokenUsingGetResponse {
    public String contentType;
    public CheckTokenUsingGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckTokenUsingGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CheckTokenUsingGet200ApplicationJson checkTokenUsingGET200ApplicationJSONObject;
    public CheckTokenUsingGetResponse withCheckTokenUsingGet200ApplicationJsonObject(CheckTokenUsingGet200ApplicationJson checkTokenUsingGET200ApplicationJSONObject) {
        this.checkTokenUsingGET200ApplicationJSONObject = checkTokenUsingGET200ApplicationJSONObject;
        return this;
    }
    public CheckTokenUsingGet400ApplicationJson checkTokenUsingGET400ApplicationJSONObject;
    public CheckTokenUsingGetResponse withCheckTokenUsingGet400ApplicationJsonObject(CheckTokenUsingGet400ApplicationJson checkTokenUsingGET400ApplicationJSONObject) {
        this.checkTokenUsingGET400ApplicationJSONObject = checkTokenUsingGET400ApplicationJSONObject;
        return this;
    }
    public CheckTokenUsingGet401ApplicationJson checkTokenUsingGET401ApplicationJSONObject;
    public CheckTokenUsingGetResponse withCheckTokenUsingGet401ApplicationJsonObject(CheckTokenUsingGet401ApplicationJson checkTokenUsingGET401ApplicationJSONObject) {
        this.checkTokenUsingGET401ApplicationJSONObject = checkTokenUsingGET401ApplicationJSONObject;
        return this;
    }
    public CheckTokenUsingGet500ApplicationJson checkTokenUsingGET500ApplicationJSONObject;
    public CheckTokenUsingGetResponse withCheckTokenUsingGet500ApplicationJsonObject(CheckTokenUsingGet500ApplicationJson checkTokenUsingGET500ApplicationJSONObject) {
        this.checkTokenUsingGET500ApplicationJSONObject = checkTokenUsingGET500ApplicationJSONObject;
        return this;
    }
}