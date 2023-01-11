package openapisdk.models.operations;



public class ImplantableDevicesListResponse {
    public String contentType;
    public ImplantableDevicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImplantableDevicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ImplantableDevicesList200ApplicationJson implantableDevicesList200ApplicationJSONObject;
    public ImplantableDevicesListResponse withImplantableDevicesList200ApplicationJsonObject(ImplantableDevicesList200ApplicationJson implantableDevicesList200ApplicationJSONObject) {
        this.implantableDevicesList200ApplicationJSONObject = implantableDevicesList200ApplicationJSONObject;
        return this;
    }
}