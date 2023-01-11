package openapisdk.models.shared;


public enum GoalResponseMetricUnitEnum {
    NONE("none"),
    CURRENCY("currency"),
    PERCENTAGE("percentage");

    public final String value;

    private GoalResponseMetricUnitEnum(String value) {
        this.value = value;
    }
}
