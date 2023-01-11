package openapisdk.models.operations;



public class SignUpIdResponse {
    public String contentType;
    public SignUpIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object demoAuthResponse;
    public SignUpIdResponse withDemoAuthResponse(Object demoAuthResponse) {
        this.demoAuthResponse = demoAuthResponse;
        return this;
    }
    public Object signUPId400ApplicationJSONOneOf;
    public SignUpIdResponse withSignUpId400ApplicationJsonOneOf(Object signUPId400ApplicationJSONOneOf) {
        this.signUPId400ApplicationJSONOneOf = signUPId400ApplicationJSONOneOf;
        return this;
    }
    public SignUpId401ApplicationJson signUPId401ApplicationJSONObject;
    public SignUpIdResponse withSignUpId401ApplicationJsonObject(SignUpId401ApplicationJson signUPId401ApplicationJSONObject) {
        this.signUPId401ApplicationJSONObject = signUPId401ApplicationJSONObject;
        return this;
    }
    public SignUpId500ApplicationJson signUPId500ApplicationJSONObject;
    public SignUpIdResponse withSignUpId500ApplicationJsonObject(SignUpId500ApplicationJson signUPId500ApplicationJSONObject) {
        this.signUPId500ApplicationJSONObject = signUPId500ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public SignUpIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}