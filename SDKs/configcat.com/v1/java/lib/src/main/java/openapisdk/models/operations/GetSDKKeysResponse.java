package openapisdk.models.operations;



public class GetSDKKeysResponse {
    public String contentType;
    public GetSDKKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SDKKeysModel sdkKeysModel;
    public GetSDKKeysResponse withSDKKeysModel(openapisdk.models.shared.SDKKeysModel sdkKeysModel) {
        this.sdkKeysModel = sdkKeysModel;
        return this;
    }
    public Long statusCode;
    public GetSDKKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}