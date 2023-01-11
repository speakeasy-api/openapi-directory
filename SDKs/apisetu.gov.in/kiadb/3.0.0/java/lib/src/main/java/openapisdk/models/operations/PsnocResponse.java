package openapisdk.models.operations;



public class PsnocResponse {
    public String contentType;
    public PsnocResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PsnocResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Psnoc400ApplicationJson psnoc400ApplicationJSONObject;
    public PsnocResponse withPsnoc400ApplicationJsonObject(Psnoc400ApplicationJson psnoc400ApplicationJSONObject) {
        this.psnoc400ApplicationJSONObject = psnoc400ApplicationJSONObject;
        return this;
    }
    public Psnoc401ApplicationJson psnoc401ApplicationJSONObject;
    public PsnocResponse withPsnoc401ApplicationJsonObject(Psnoc401ApplicationJson psnoc401ApplicationJSONObject) {
        this.psnoc401ApplicationJSONObject = psnoc401ApplicationJSONObject;
        return this;
    }
    public Psnoc404ApplicationJson psnoc404ApplicationJSONObject;
    public PsnocResponse withPsnoc404ApplicationJsonObject(Psnoc404ApplicationJson psnoc404ApplicationJSONObject) {
        this.psnoc404ApplicationJSONObject = psnoc404ApplicationJSONObject;
        return this;
    }
    public Psnoc500ApplicationJson psnoc500ApplicationJSONObject;
    public PsnocResponse withPsnoc500ApplicationJsonObject(Psnoc500ApplicationJson psnoc500ApplicationJSONObject) {
        this.psnoc500ApplicationJSONObject = psnoc500ApplicationJSONObject;
        return this;
    }
    public Psnoc502ApplicationJson psnoc502ApplicationJSONObject;
    public PsnocResponse withPsnoc502ApplicationJsonObject(Psnoc502ApplicationJson psnoc502ApplicationJSONObject) {
        this.psnoc502ApplicationJSONObject = psnoc502ApplicationJSONObject;
        return this;
    }
    public Psnoc503ApplicationJson psnoc503ApplicationJSONObject;
    public PsnocResponse withPsnoc503ApplicationJsonObject(Psnoc503ApplicationJson psnoc503ApplicationJSONObject) {
        this.psnoc503ApplicationJSONObject = psnoc503ApplicationJSONObject;
        return this;
    }
    public Psnoc504ApplicationJson psnoc504ApplicationJSONObject;
    public PsnocResponse withPsnoc504ApplicationJsonObject(Psnoc504ApplicationJson psnoc504ApplicationJSONObject) {
        this.psnoc504ApplicationJSONObject = psnoc504ApplicationJSONObject;
        return this;
    }
}