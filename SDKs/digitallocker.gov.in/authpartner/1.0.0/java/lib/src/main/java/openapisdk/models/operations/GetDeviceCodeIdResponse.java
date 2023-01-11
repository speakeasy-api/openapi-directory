package openapisdk.models.operations;



public class GetDeviceCodeIdResponse {
    public String contentType;
    public GetDeviceCodeIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceAuthorizationCodeResponse deviceAuthorizationCodeResponse;
    public GetDeviceCodeIdResponse withDeviceAuthorizationCodeResponse(openapisdk.models.shared.DeviceAuthorizationCodeResponse deviceAuthorizationCodeResponse) {
        this.deviceAuthorizationCodeResponse = deviceAuthorizationCodeResponse;
        return this;
    }
    public Object getDeviceCodeId400ApplicationJSONOneOf;
    public GetDeviceCodeIdResponse withGetDeviceCodeId400ApplicationJsonOneOf(Object getDeviceCodeId400ApplicationJSONOneOf) {
        this.getDeviceCodeId400ApplicationJSONOneOf = getDeviceCodeId400ApplicationJSONOneOf;
        return this;
    }
    public GetDeviceCodeId401ApplicationJson getDeviceCodeId401ApplicationJSONObject;
    public GetDeviceCodeIdResponse withGetDeviceCodeId401ApplicationJsonObject(GetDeviceCodeId401ApplicationJson getDeviceCodeId401ApplicationJSONObject) {
        this.getDeviceCodeId401ApplicationJSONObject = getDeviceCodeId401ApplicationJSONObject;
        return this;
    }
    public Object getDeviceCodeId500ApplicationJSONOneOf;
    public GetDeviceCodeIdResponse withGetDeviceCodeId500ApplicationJsonOneOf(Object getDeviceCodeId500ApplicationJSONOneOf) {
        this.getDeviceCodeId500ApplicationJSONOneOf = getDeviceCodeId500ApplicationJSONOneOf;
        return this;
    }
    public Long statusCode;
    public GetDeviceCodeIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}