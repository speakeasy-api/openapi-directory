package openapisdk.models.operations;



public class InventoryVaccinesReadResponse {
    public String contentType;
    public InventoryVaccinesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventoryVaccine inventoryVaccine;
    public InventoryVaccinesReadResponse withInventoryVaccine(openapisdk.models.shared.InventoryVaccine inventoryVaccine) {
        this.inventoryVaccine = inventoryVaccine;
        return this;
    }
    public Long statusCode;
    public InventoryVaccinesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}