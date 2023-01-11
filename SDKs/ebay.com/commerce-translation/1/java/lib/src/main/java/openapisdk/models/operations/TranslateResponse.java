package openapisdk.models.operations;



public class TranslateResponse {
    public String contentType;
    public TranslateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TranslateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TranslateResponse translateResponse;
    public TranslateResponse withTranslateResponse(openapisdk.models.shared.TranslateResponse translateResponse) {
        this.translateResponse = translateResponse;
        return this;
    }
    public Translate400ApplicationJson translate400ApplicationJSONObject;
    public TranslateResponse withTranslate400ApplicationJsonObject(Translate400ApplicationJson translate400ApplicationJSONObject) {
        this.translate400ApplicationJSONObject = translate400ApplicationJSONObject;
        return this;
    }
    public Translate500ApplicationJson translate500ApplicationJSONObject;
    public TranslateResponse withTranslate500ApplicationJsonObject(Translate500ApplicationJson translate500ApplicationJSONObject) {
        this.translate500ApplicationJSONObject = translate500ApplicationJSONObject;
        return this;
    }
}