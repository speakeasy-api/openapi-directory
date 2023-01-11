package openapisdk.models.shared;


public enum ProtectionGroupAggregationEnum {
    SUM("SUM"),
    MEAN("MEAN"),
    MAX("MAX");

    public final String value;

    private ProtectionGroupAggregationEnum(String value) {
        this.value = value;
    }
}
