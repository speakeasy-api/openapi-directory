package openapisdk.models.shared;


public enum ScorePrivacyEnum {
    PUBLIC_("public"),
    PRIVATE_("private"),
    ORGANIZATION_PUBLIC("organizationPublic"),
    PRIVATE_LINK("privateLink");

    public final String value;

    private ScorePrivacyEnum(String value) {
        this.value = value;
    }
}
