package openapisdk.models.shared;


public enum RevisionLocationTypeEnum {
    S3("S3"),
    GIT_HUB("GitHub"),
    STRING("String"),
    APP_SPEC_CONTENT("AppSpecContent");

    public final String value;

    private RevisionLocationTypeEnum(String value) {
        this.value = value;
    }
}
