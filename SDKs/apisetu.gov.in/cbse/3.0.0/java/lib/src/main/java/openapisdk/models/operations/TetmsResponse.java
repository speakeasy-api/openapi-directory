package openapisdk.models.operations;



public class TetmsResponse {
    public String contentType;
    public TetmsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TetmsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Tetms400ApplicationJson tetms400ApplicationJSONObject;
    public TetmsResponse withTetms400ApplicationJsonObject(Tetms400ApplicationJson tetms400ApplicationJSONObject) {
        this.tetms400ApplicationJSONObject = tetms400ApplicationJSONObject;
        return this;
    }
    public Tetms401ApplicationJson tetms401ApplicationJSONObject;
    public TetmsResponse withTetms401ApplicationJsonObject(Tetms401ApplicationJson tetms401ApplicationJSONObject) {
        this.tetms401ApplicationJSONObject = tetms401ApplicationJSONObject;
        return this;
    }
    public Tetms404ApplicationJson tetms404ApplicationJSONObject;
    public TetmsResponse withTetms404ApplicationJsonObject(Tetms404ApplicationJson tetms404ApplicationJSONObject) {
        this.tetms404ApplicationJSONObject = tetms404ApplicationJSONObject;
        return this;
    }
    public Tetms500ApplicationJson tetms500ApplicationJSONObject;
    public TetmsResponse withTetms500ApplicationJsonObject(Tetms500ApplicationJson tetms500ApplicationJSONObject) {
        this.tetms500ApplicationJSONObject = tetms500ApplicationJSONObject;
        return this;
    }
    public Tetms502ApplicationJson tetms502ApplicationJSONObject;
    public TetmsResponse withTetms502ApplicationJsonObject(Tetms502ApplicationJson tetms502ApplicationJSONObject) {
        this.tetms502ApplicationJSONObject = tetms502ApplicationJSONObject;
        return this;
    }
    public Tetms503ApplicationJson tetms503ApplicationJSONObject;
    public TetmsResponse withTetms503ApplicationJsonObject(Tetms503ApplicationJson tetms503ApplicationJSONObject) {
        this.tetms503ApplicationJSONObject = tetms503ApplicationJSONObject;
        return this;
    }
    public Tetms504ApplicationJson tetms504ApplicationJSONObject;
    public TetmsResponse withTetms504ApplicationJsonObject(Tetms504ApplicationJson tetms504ApplicationJSONObject) {
        this.tetms504ApplicationJSONObject = tetms504ApplicationJSONObject;
        return this;
    }
}