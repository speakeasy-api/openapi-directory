package openapisdk.models.operations;



public class ImplantableDevicesReadRequest {
    public ImplantableDevicesReadPathParams pathParams;
    public ImplantableDevicesReadRequest withPathParams(ImplantableDevicesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ImplantableDevicesReadQueryParams queryParams;
    public ImplantableDevicesReadRequest withQueryParams(ImplantableDevicesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ImplantableDevicesReadSecurity security;
    public ImplantableDevicesReadRequest withSecurity(ImplantableDevicesReadSecurity security) {
        this.security = security;
        return this;
    }
}