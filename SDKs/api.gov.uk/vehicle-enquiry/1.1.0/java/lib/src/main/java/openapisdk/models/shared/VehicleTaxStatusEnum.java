package openapisdk.models.shared;


public enum VehicleTaxStatusEnum {
    NOT_TAXED_FOR_ON_ROAD_USE("Not Taxed for on Road Use"),
    SORN("SORN"),
    TAXED("Taxed"),
    UNTAXED("Untaxed");

    public final String value;

    private VehicleTaxStatusEnum(String value) {
        this.value = value;
    }
}
