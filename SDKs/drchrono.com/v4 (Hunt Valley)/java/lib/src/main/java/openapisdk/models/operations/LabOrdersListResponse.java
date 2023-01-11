package openapisdk.models.operations;



public class LabOrdersListResponse {
    public String contentType;
    public LabOrdersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LabOrdersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public LabOrdersList200ApplicationJson labOrdersList200ApplicationJSONObject;
    public LabOrdersListResponse withLabOrdersList200ApplicationJsonObject(LabOrdersList200ApplicationJson labOrdersList200ApplicationJSONObject) {
        this.labOrdersList200ApplicationJSONObject = labOrdersList200ApplicationJSONObject;
        return this;
    }
}