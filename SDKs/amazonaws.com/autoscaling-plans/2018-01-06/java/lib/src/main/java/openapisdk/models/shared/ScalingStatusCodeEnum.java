package openapisdk.models.shared;


public enum ScalingStatusCodeEnum {
    INACTIVE("Inactive"),
    PARTIALLY_ACTIVE("PartiallyActive"),
    ACTIVE("Active");

    public final String value;

    private ScalingStatusCodeEnum(String value) {
        this.value = value;
    }
}
