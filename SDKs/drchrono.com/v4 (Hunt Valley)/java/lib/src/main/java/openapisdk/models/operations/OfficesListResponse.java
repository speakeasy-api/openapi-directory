package openapisdk.models.operations;



public class OfficesListResponse {
    public String contentType;
    public OfficesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OfficesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public OfficesList200ApplicationJson officesList200ApplicationJSONObject;
    public OfficesListResponse withOfficesList200ApplicationJsonObject(OfficesList200ApplicationJson officesList200ApplicationJSONObject) {
        this.officesList200ApplicationJSONObject = officesList200ApplicationJSONObject;
        return this;
    }
}