package openapisdk.models.shared;


public enum FindingChangeTypeEnum {
    CHANGED("CHANGED"),
    NEW_("NEW"),
    UNCHANGED("UNCHANGED");

    public final String value;

    private FindingChangeTypeEnum(String value) {
        this.value = value;
    }
}
