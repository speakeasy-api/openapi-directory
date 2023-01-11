package openapisdk.models.shared;


public enum ProvisionedProductStatusEnum {
    AVAILABLE("AVAILABLE"),
    UNDER_CHANGE("UNDER_CHANGE"),
    TAINTED("TAINTED"),
    ERROR("ERROR"),
    PLAN_IN_PROGRESS("PLAN_IN_PROGRESS");

    public final String value;

    private ProvisionedProductStatusEnum(String value) {
        this.value = value;
    }
}
