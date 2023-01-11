package openapisdk.models.operations;


public enum ReposUpdateRequestBodyVisibilityEnum {
    PUBLIC_("public"),
    PRIVATE_("private"),
    VISIBILITY("visibility"),
    INTERNAL("internal");

    public final String value;

    private ReposUpdateRequestBodyVisibilityEnum(String value) {
        this.value = value;
    }
}
