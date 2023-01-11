package openapisdk.models.operations;



public class InventoryVaccinesListResponse {
    public String contentType;
    public InventoryVaccinesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InventoryVaccinesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public InventoryVaccinesList200ApplicationJson inventoryVaccinesList200ApplicationJSONObject;
    public InventoryVaccinesListResponse withInventoryVaccinesList200ApplicationJsonObject(InventoryVaccinesList200ApplicationJson inventoryVaccinesList200ApplicationJSONObject) {
        this.inventoryVaccinesList200ApplicationJSONObject = inventoryVaccinesList200ApplicationJSONObject;
        return this;
    }
}