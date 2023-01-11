package openapisdk.models.shared;


public enum InventoryVaccineStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    ARCHIVED("archived"),
    VOIDED("voided");

    public final String value;

    private InventoryVaccineStatusEnum(String value) {
        this.value = value;
    }
}
