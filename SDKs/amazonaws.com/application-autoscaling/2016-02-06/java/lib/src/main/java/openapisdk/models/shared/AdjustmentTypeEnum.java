package openapisdk.models.shared;


public enum AdjustmentTypeEnum {
    CHANGE_IN_CAPACITY("ChangeInCapacity"),
    PERCENT_CHANGE_IN_CAPACITY("PercentChangeInCapacity"),
    EXACT_CAPACITY("ExactCapacity");

    public final String value;

    private AdjustmentTypeEnum(String value) {
        this.value = value;
    }
}
