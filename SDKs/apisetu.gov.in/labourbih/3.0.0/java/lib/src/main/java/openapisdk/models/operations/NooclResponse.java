package openapisdk.models.operations;



public class NooclResponse {
    public String contentType;
    public NooclResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NooclResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Noocl400ApplicationJson noocl400ApplicationJSONObject;
    public NooclResponse withNoocl400ApplicationJsonObject(Noocl400ApplicationJson noocl400ApplicationJSONObject) {
        this.noocl400ApplicationJSONObject = noocl400ApplicationJSONObject;
        return this;
    }
    public Noocl401ApplicationJson noocl401ApplicationJSONObject;
    public NooclResponse withNoocl401ApplicationJsonObject(Noocl401ApplicationJson noocl401ApplicationJSONObject) {
        this.noocl401ApplicationJSONObject = noocl401ApplicationJSONObject;
        return this;
    }
    public Noocl404ApplicationJson noocl404ApplicationJSONObject;
    public NooclResponse withNoocl404ApplicationJsonObject(Noocl404ApplicationJson noocl404ApplicationJSONObject) {
        this.noocl404ApplicationJSONObject = noocl404ApplicationJSONObject;
        return this;
    }
    public Noocl500ApplicationJson noocl500ApplicationJSONObject;
    public NooclResponse withNoocl500ApplicationJsonObject(Noocl500ApplicationJson noocl500ApplicationJSONObject) {
        this.noocl500ApplicationJSONObject = noocl500ApplicationJSONObject;
        return this;
    }
    public Noocl502ApplicationJson noocl502ApplicationJSONObject;
    public NooclResponse withNoocl502ApplicationJsonObject(Noocl502ApplicationJson noocl502ApplicationJSONObject) {
        this.noocl502ApplicationJSONObject = noocl502ApplicationJSONObject;
        return this;
    }
    public Noocl503ApplicationJson noocl503ApplicationJSONObject;
    public NooclResponse withNoocl503ApplicationJsonObject(Noocl503ApplicationJson noocl503ApplicationJSONObject) {
        this.noocl503ApplicationJSONObject = noocl503ApplicationJSONObject;
        return this;
    }
    public Noocl504ApplicationJson noocl504ApplicationJSONObject;
    public NooclResponse withNoocl504ApplicationJsonObject(Noocl504ApplicationJson noocl504ApplicationJSONObject) {
        this.noocl504ApplicationJSONObject = noocl504ApplicationJSONObject;
        return this;
    }
}