package openapisdk.models.shared;


public enum AggregateTypeEnum {
    AVERAGE("AVERAGE"),
    COUNT("COUNT"),
    MAXIMUM("MAXIMUM"),
    MINIMUM("MINIMUM"),
    SUM("SUM"),
    STANDARD_DEVIATION("STANDARD_DEVIATION");

    public final String value;

    private AggregateTypeEnum(String value) {
        this.value = value;
    }
}
