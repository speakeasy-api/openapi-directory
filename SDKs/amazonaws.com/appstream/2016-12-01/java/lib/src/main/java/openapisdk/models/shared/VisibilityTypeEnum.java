package openapisdk.models.shared;


public enum VisibilityTypeEnum {
    PUBLIC_("PUBLIC"),
    PRIVATE_("PRIVATE"),
    SHARED("SHARED");

    public final String value;

    private VisibilityTypeEnum(String value) {
        this.value = value;
    }
}
