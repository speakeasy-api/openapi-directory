package openapisdk.models.operations;



public class PancrResponse {
    public byte[] body;
    public PancrResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PancrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PancrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Pancr400ApplicationJson pancr400ApplicationJSONObject;
    public PancrResponse withPancr400ApplicationJsonObject(Pancr400ApplicationJson pancr400ApplicationJSONObject) {
        this.pancr400ApplicationJSONObject = pancr400ApplicationJSONObject;
        return this;
    }
    public Pancr401ApplicationJson pancr401ApplicationJSONObject;
    public PancrResponse withPancr401ApplicationJsonObject(Pancr401ApplicationJson pancr401ApplicationJSONObject) {
        this.pancr401ApplicationJSONObject = pancr401ApplicationJSONObject;
        return this;
    }
    public Pancr404ApplicationJson pancr404ApplicationJSONObject;
    public PancrResponse withPancr404ApplicationJsonObject(Pancr404ApplicationJson pancr404ApplicationJSONObject) {
        this.pancr404ApplicationJSONObject = pancr404ApplicationJSONObject;
        return this;
    }
    public Pancr500ApplicationJson pancr500ApplicationJSONObject;
    public PancrResponse withPancr500ApplicationJsonObject(Pancr500ApplicationJson pancr500ApplicationJSONObject) {
        this.pancr500ApplicationJSONObject = pancr500ApplicationJSONObject;
        return this;
    }
    public Pancr502ApplicationJson pancr502ApplicationJSONObject;
    public PancrResponse withPancr502ApplicationJsonObject(Pancr502ApplicationJson pancr502ApplicationJSONObject) {
        this.pancr502ApplicationJSONObject = pancr502ApplicationJSONObject;
        return this;
    }
    public Pancr503ApplicationJson pancr503ApplicationJSONObject;
    public PancrResponse withPancr503ApplicationJsonObject(Pancr503ApplicationJson pancr503ApplicationJSONObject) {
        this.pancr503ApplicationJSONObject = pancr503ApplicationJSONObject;
        return this;
    }
    public Pancr504ApplicationJson pancr504ApplicationJSONObject;
    public PancrResponse withPancr504ApplicationJsonObject(Pancr504ApplicationJson pancr504ApplicationJSONObject) {
        this.pancr504ApplicationJSONObject = pancr504ApplicationJSONObject;
        return this;
    }
}