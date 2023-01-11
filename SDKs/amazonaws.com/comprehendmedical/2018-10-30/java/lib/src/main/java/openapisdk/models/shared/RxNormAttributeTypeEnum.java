package openapisdk.models.shared;


public enum RxNormAttributeTypeEnum {
    DOSAGE("DOSAGE"),
    DURATION("DURATION"),
    FORM("FORM"),
    FREQUENCY("FREQUENCY"),
    RATE("RATE"),
    ROUTE_OR_MODE("ROUTE_OR_MODE"),
    STRENGTH("STRENGTH");

    public final String value;

    private RxNormAttributeTypeEnum(String value) {
        this.value = value;
    }
}
