package openapisdk.models.shared;


public enum UsageTypeEnum {
    DATA_INVENTORY_EVALUATION("DATA_INVENTORY_EVALUATION"),
    SENSITIVE_DATA_DISCOVERY("SENSITIVE_DATA_DISCOVERY");

    public final String value;

    private UsageTypeEnum(String value) {
        this.value = value;
    }
}
