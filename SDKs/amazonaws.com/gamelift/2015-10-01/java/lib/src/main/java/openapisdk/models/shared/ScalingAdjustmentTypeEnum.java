package openapisdk.models.shared;


public enum ScalingAdjustmentTypeEnum {
    CHANGE_IN_CAPACITY("ChangeInCapacity"),
    EXACT_CAPACITY("ExactCapacity"),
    PERCENT_CHANGE_IN_CAPACITY("PercentChangeInCapacity");

    public final String value;

    private ScalingAdjustmentTypeEnum(String value) {
        this.value = value;
    }
}
