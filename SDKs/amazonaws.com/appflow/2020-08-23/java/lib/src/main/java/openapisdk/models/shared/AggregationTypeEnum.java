package openapisdk.models.shared;


public enum AggregationTypeEnum {
    NONE("None"),
    SINGLE_FILE("SingleFile");

    public final String value;

    private AggregationTypeEnum(String value) {
        this.value = value;
    }
}
