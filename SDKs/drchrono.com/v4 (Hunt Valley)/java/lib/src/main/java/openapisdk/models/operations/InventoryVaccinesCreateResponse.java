package openapisdk.models.operations;



public class InventoryVaccinesCreateResponse {
    public String contentType;
    public InventoryVaccinesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventoryVaccine inventoryVaccine;
    public InventoryVaccinesCreateResponse withInventoryVaccine(openapisdk.models.shared.InventoryVaccine inventoryVaccine) {
        this.inventoryVaccine = inventoryVaccine;
        return this;
    }
    public Long statusCode;
    public InventoryVaccinesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}