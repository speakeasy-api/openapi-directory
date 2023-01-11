package openapisdk.models.operations;



public class MnrgaResponse {
    public String contentType;
    public MnrgaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MnrgaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Mnrga400ApplicationJson mnrga400ApplicationJSONObject;
    public MnrgaResponse withMnrga400ApplicationJsonObject(Mnrga400ApplicationJson mnrga400ApplicationJSONObject) {
        this.mnrga400ApplicationJSONObject = mnrga400ApplicationJSONObject;
        return this;
    }
    public Mnrga401ApplicationJson mnrga401ApplicationJSONObject;
    public MnrgaResponse withMnrga401ApplicationJsonObject(Mnrga401ApplicationJson mnrga401ApplicationJSONObject) {
        this.mnrga401ApplicationJSONObject = mnrga401ApplicationJSONObject;
        return this;
    }
    public Mnrga404ApplicationJson mnrga404ApplicationJSONObject;
    public MnrgaResponse withMnrga404ApplicationJsonObject(Mnrga404ApplicationJson mnrga404ApplicationJSONObject) {
        this.mnrga404ApplicationJSONObject = mnrga404ApplicationJSONObject;
        return this;
    }
    public Mnrga500ApplicationJson mnrga500ApplicationJSONObject;
    public MnrgaResponse withMnrga500ApplicationJsonObject(Mnrga500ApplicationJson mnrga500ApplicationJSONObject) {
        this.mnrga500ApplicationJSONObject = mnrga500ApplicationJSONObject;
        return this;
    }
    public Mnrga502ApplicationJson mnrga502ApplicationJSONObject;
    public MnrgaResponse withMnrga502ApplicationJsonObject(Mnrga502ApplicationJson mnrga502ApplicationJSONObject) {
        this.mnrga502ApplicationJSONObject = mnrga502ApplicationJSONObject;
        return this;
    }
    public Mnrga503ApplicationJson mnrga503ApplicationJSONObject;
    public MnrgaResponse withMnrga503ApplicationJsonObject(Mnrga503ApplicationJson mnrga503ApplicationJSONObject) {
        this.mnrga503ApplicationJSONObject = mnrga503ApplicationJSONObject;
        return this;
    }
    public Mnrga504ApplicationJson mnrga504ApplicationJSONObject;
    public MnrgaResponse withMnrga504ApplicationJsonObject(Mnrga504ApplicationJson mnrga504ApplicationJSONObject) {
        this.mnrga504ApplicationJSONObject = mnrga504ApplicationJSONObject;
        return this;
    }
}