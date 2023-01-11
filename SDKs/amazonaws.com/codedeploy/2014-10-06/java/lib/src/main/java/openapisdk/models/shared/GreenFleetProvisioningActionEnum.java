package openapisdk.models.shared;


public enum GreenFleetProvisioningActionEnum {
    DISCOVER_EXISTING("DISCOVER_EXISTING"),
    COPY_AUTO_SCALING_GROUP("COPY_AUTO_SCALING_GROUP");

    public final String value;

    private GreenFleetProvisioningActionEnum(String value) {
        this.value = value;
    }
}
