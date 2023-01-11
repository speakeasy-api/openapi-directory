package openapisdk.models.shared;


public enum GoalMetricRequestUnitEnum {
    NONE("none"),
    CURRENCY("currency"),
    PERCENTAGE("percentage");

    public final String value;

    private GoalMetricRequestUnitEnum(String value) {
        this.value = value;
    }
}
