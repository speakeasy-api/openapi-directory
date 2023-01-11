package openapisdk.models.operations;



public class TetcrResponse {
    public String contentType;
    public TetcrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TetcrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Tetcr400ApplicationJson tetcr400ApplicationJSONObject;
    public TetcrResponse withTetcr400ApplicationJsonObject(Tetcr400ApplicationJson tetcr400ApplicationJSONObject) {
        this.tetcr400ApplicationJSONObject = tetcr400ApplicationJSONObject;
        return this;
    }
    public Tetcr401ApplicationJson tetcr401ApplicationJSONObject;
    public TetcrResponse withTetcr401ApplicationJsonObject(Tetcr401ApplicationJson tetcr401ApplicationJSONObject) {
        this.tetcr401ApplicationJSONObject = tetcr401ApplicationJSONObject;
        return this;
    }
    public Tetcr404ApplicationJson tetcr404ApplicationJSONObject;
    public TetcrResponse withTetcr404ApplicationJsonObject(Tetcr404ApplicationJson tetcr404ApplicationJSONObject) {
        this.tetcr404ApplicationJSONObject = tetcr404ApplicationJSONObject;
        return this;
    }
    public Tetcr500ApplicationJson tetcr500ApplicationJSONObject;
    public TetcrResponse withTetcr500ApplicationJsonObject(Tetcr500ApplicationJson tetcr500ApplicationJSONObject) {
        this.tetcr500ApplicationJSONObject = tetcr500ApplicationJSONObject;
        return this;
    }
    public Tetcr502ApplicationJson tetcr502ApplicationJSONObject;
    public TetcrResponse withTetcr502ApplicationJsonObject(Tetcr502ApplicationJson tetcr502ApplicationJSONObject) {
        this.tetcr502ApplicationJSONObject = tetcr502ApplicationJSONObject;
        return this;
    }
    public Tetcr503ApplicationJson tetcr503ApplicationJSONObject;
    public TetcrResponse withTetcr503ApplicationJsonObject(Tetcr503ApplicationJson tetcr503ApplicationJSONObject) {
        this.tetcr503ApplicationJSONObject = tetcr503ApplicationJSONObject;
        return this;
    }
    public Tetcr504ApplicationJson tetcr504ApplicationJSONObject;
    public TetcrResponse withTetcr504ApplicationJsonObject(Tetcr504ApplicationJson tetcr504ApplicationJSONObject) {
        this.tetcr504ApplicationJSONObject = tetcr504ApplicationJSONObject;
        return this;
    }
}