package openapisdk.models.shared;


public enum PredictiveScalingMaxCapacityBreachBehaviorEnum {
    HONOR_MAX_CAPACITY("HonorMaxCapacity"),
    INCREASE_MAX_CAPACITY("IncreaseMaxCapacity");

    public final String value;

    private PredictiveScalingMaxCapacityBreachBehaviorEnum(String value) {
        this.value = value;
    }
}
