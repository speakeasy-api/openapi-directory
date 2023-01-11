package openapisdk.models.shared;


public enum OperatorTypeEnum {
    EQ("EQ"),
    REF_EQ("REF_EQ"),
    LE("LE"),
    GE("GE"),
    BETWEEN("BETWEEN");

    public final String value;

    private OperatorTypeEnum(String value) {
        this.value = value;
    }
}
