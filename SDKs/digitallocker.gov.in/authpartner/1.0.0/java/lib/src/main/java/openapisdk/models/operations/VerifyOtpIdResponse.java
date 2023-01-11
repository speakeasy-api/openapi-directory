package openapisdk.models.operations;



public class VerifyOtpIdResponse {
    public String contentType;
    public VerifyOtpIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object demoAuthVerifyResponse;
    public VerifyOtpIdResponse withDemoAuthVerifyResponse(Object demoAuthVerifyResponse) {
        this.demoAuthVerifyResponse = demoAuthVerifyResponse;
        return this;
    }
    public Long statusCode;
    public VerifyOtpIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object verifyOTPId400ApplicationJSONOneOf;
    public VerifyOtpIdResponse withVerifyOtpId400ApplicationJsonOneOf(Object verifyOTPId400ApplicationJSONOneOf) {
        this.verifyOTPId400ApplicationJSONOneOf = verifyOTPId400ApplicationJSONOneOf;
        return this;
    }
    public VerifyOtpId401ApplicationJson verifyOTPId401ApplicationJSONObject;
    public VerifyOtpIdResponse withVerifyOtpId401ApplicationJsonObject(VerifyOtpId401ApplicationJson verifyOTPId401ApplicationJSONObject) {
        this.verifyOTPId401ApplicationJSONObject = verifyOTPId401ApplicationJSONObject;
        return this;
    }
    public VerifyOtpId500ApplicationJson verifyOTPId500ApplicationJSONObject;
    public VerifyOtpIdResponse withVerifyOtpId500ApplicationJsonObject(VerifyOtpId500ApplicationJson verifyOTPId500ApplicationJSONObject) {
        this.verifyOTPId500ApplicationJSONObject = verifyOTPId500ApplicationJSONObject;
        return this;
    }
}