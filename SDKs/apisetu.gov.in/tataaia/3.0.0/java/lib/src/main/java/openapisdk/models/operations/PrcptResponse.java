package openapisdk.models.operations;



public class PrcptResponse {
    public String contentType;
    public PrcptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PrcptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Prcpt400ApplicationJson prcpt400ApplicationJSONObject;
    public PrcptResponse withPrcpt400ApplicationJsonObject(Prcpt400ApplicationJson prcpt400ApplicationJSONObject) {
        this.prcpt400ApplicationJSONObject = prcpt400ApplicationJSONObject;
        return this;
    }
    public Prcpt401ApplicationJson prcpt401ApplicationJSONObject;
    public PrcptResponse withPrcpt401ApplicationJsonObject(Prcpt401ApplicationJson prcpt401ApplicationJSONObject) {
        this.prcpt401ApplicationJSONObject = prcpt401ApplicationJSONObject;
        return this;
    }
    public Prcpt404ApplicationJson prcpt404ApplicationJSONObject;
    public PrcptResponse withPrcpt404ApplicationJsonObject(Prcpt404ApplicationJson prcpt404ApplicationJSONObject) {
        this.prcpt404ApplicationJSONObject = prcpt404ApplicationJSONObject;
        return this;
    }
    public Prcpt500ApplicationJson prcpt500ApplicationJSONObject;
    public PrcptResponse withPrcpt500ApplicationJsonObject(Prcpt500ApplicationJson prcpt500ApplicationJSONObject) {
        this.prcpt500ApplicationJSONObject = prcpt500ApplicationJSONObject;
        return this;
    }
    public Prcpt502ApplicationJson prcpt502ApplicationJSONObject;
    public PrcptResponse withPrcpt502ApplicationJsonObject(Prcpt502ApplicationJson prcpt502ApplicationJSONObject) {
        this.prcpt502ApplicationJSONObject = prcpt502ApplicationJSONObject;
        return this;
    }
    public Prcpt503ApplicationJson prcpt503ApplicationJSONObject;
    public PrcptResponse withPrcpt503ApplicationJsonObject(Prcpt503ApplicationJson prcpt503ApplicationJSONObject) {
        this.prcpt503ApplicationJSONObject = prcpt503ApplicationJSONObject;
        return this;
    }
    public Prcpt504ApplicationJson prcpt504ApplicationJSONObject;
    public PrcptResponse withPrcpt504ApplicationJsonObject(Prcpt504ApplicationJson prcpt504ApplicationJSONObject) {
        this.prcpt504ApplicationJSONObject = prcpt504ApplicationJSONObject;
        return this;
    }
}