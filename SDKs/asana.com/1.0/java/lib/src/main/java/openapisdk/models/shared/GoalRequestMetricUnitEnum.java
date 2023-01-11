package openapisdk.models.shared;


public enum GoalRequestMetricUnitEnum {
    NONE("none"),
    CURRENCY("currency"),
    PERCENTAGE("percentage");

    public final String value;

    private GoalRequestMetricUnitEnum(String value) {
        this.value = value;
    }
}
