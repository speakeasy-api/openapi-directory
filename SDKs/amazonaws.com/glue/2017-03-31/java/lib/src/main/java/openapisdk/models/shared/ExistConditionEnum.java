package openapisdk.models.shared;


public enum ExistConditionEnum {
    MUST_EXIST("MUST_EXIST"),
    NOT_EXIST("NOT_EXIST"),
    NONE("NONE");

    public final String value;

    private ExistConditionEnum(String value) {
        this.value = value;
    }
}
