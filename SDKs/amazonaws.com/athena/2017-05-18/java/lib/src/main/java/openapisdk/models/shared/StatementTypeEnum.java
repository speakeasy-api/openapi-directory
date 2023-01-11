package openapisdk.models.shared;


public enum StatementTypeEnum {
    DDL("DDL"),
    DML("DML"),
    UTILITY("UTILITY");

    public final String value;

    private StatementTypeEnum(String value) {
        this.value = value;
    }
}
