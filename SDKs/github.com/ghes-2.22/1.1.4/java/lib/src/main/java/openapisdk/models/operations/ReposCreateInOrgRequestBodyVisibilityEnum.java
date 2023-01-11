package openapisdk.models.operations;


public enum ReposCreateInOrgRequestBodyVisibilityEnum {
    PUBLIC_("public"),
    PRIVATE_("private"),
    VISIBILITY("visibility"),
    INTERNAL("internal");

    public final String value;

    private ReposCreateInOrgRequestBodyVisibilityEnum(String value) {
        this.value = value;
    }
}
