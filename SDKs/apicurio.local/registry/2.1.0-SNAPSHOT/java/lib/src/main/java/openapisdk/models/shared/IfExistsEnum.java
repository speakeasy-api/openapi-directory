package openapisdk.models.shared;


public enum IfExistsEnum {
    FAIL("FAIL"),
    UPDATE("UPDATE"),
    RETURN_("RETURN"),
    RETURN_OR_UPDATE("RETURN_OR_UPDATE");

    public final String value;

    private IfExistsEnum(String value) {
        this.value = value;
    }
}
