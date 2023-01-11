package openapisdk.models.operations;



public class VerifyAccountIdResponse {
    public String contentType;
    public VerifyAccountIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VerifyAccountIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public VerifyAccountId400ApplicationJson verifyAccountId400ApplicationJSONObject;
    public VerifyAccountIdResponse withVerifyAccountId400ApplicationJsonObject(VerifyAccountId400ApplicationJson verifyAccountId400ApplicationJSONObject) {
        this.verifyAccountId400ApplicationJSONObject = verifyAccountId400ApplicationJSONObject;
        return this;
    }
    public VerifyAccountId401ApplicationJson verifyAccountId401ApplicationJSONObject;
    public VerifyAccountIdResponse withVerifyAccountId401ApplicationJsonObject(VerifyAccountId401ApplicationJson verifyAccountId401ApplicationJSONObject) {
        this.verifyAccountId401ApplicationJSONObject = verifyAccountId401ApplicationJSONObject;
        return this;
    }
    public VerifyAccountId500ApplicationJson verifyAccountId500ApplicationJSONObject;
    public VerifyAccountIdResponse withVerifyAccountId500ApplicationJsonObject(VerifyAccountId500ApplicationJson verifyAccountId500ApplicationJSONObject) {
        this.verifyAccountId500ApplicationJSONObject = verifyAccountId500ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.VerifyAccountResponse verifyAccountResponse;
    public VerifyAccountIdResponse withVerifyAccountResponse(openapisdk.models.shared.VerifyAccountResponse verifyAccountResponse) {
        this.verifyAccountResponse = verifyAccountResponse;
        return this;
    }
}