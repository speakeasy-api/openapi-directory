package openapisdk.models.operations;



public class ImplantableDevicesReadResponse {
    public String contentType;
    public ImplantableDevicesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImplantableDevice implantableDevice;
    public ImplantableDevicesReadResponse withImplantableDevice(openapisdk.models.shared.ImplantableDevice implantableDevice) {
        this.implantableDevice = implantableDevice;
        return this;
    }
    public Long statusCode;
    public ImplantableDevicesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}