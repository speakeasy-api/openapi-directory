package openapisdk.models.shared;


public enum DimensionValueOperatorEnum {
    IN("IN"),
    NOT_IN("NOT_IN");

    public final String value;

    private DimensionValueOperatorEnum(String value) {
        this.value = value;
    }
}
