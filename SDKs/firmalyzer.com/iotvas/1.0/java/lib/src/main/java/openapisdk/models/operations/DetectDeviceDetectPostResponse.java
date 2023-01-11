package openapisdk.models.operations;



public class DetectDeviceDetectPostResponse {
    public String contentType;
    public DetectDeviceDetectPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceInfo deviceInfo;
    public DetectDeviceDetectPostResponse withDeviceInfo(openapisdk.models.shared.DeviceInfo deviceInfo) {
        this.deviceInfo = deviceInfo;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public DetectDeviceDetectPostResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public DetectDeviceDetectPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}