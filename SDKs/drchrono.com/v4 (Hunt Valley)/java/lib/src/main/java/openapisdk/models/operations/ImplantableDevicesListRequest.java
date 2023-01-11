package openapisdk.models.operations;



public class ImplantableDevicesListRequest {
    public ImplantableDevicesListQueryParams queryParams;
    public ImplantableDevicesListRequest withQueryParams(ImplantableDevicesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ImplantableDevicesListSecurity security;
    public ImplantableDevicesListRequest withSecurity(ImplantableDevicesListSecurity security) {
        this.security = security;
        return this;
    }
}