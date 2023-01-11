package openapisdk.models.shared;


public enum ServerTypeEnum {
    GITHUB("GITHUB"),
    BITBUCKET("BITBUCKET"),
    GITHUB_ENTERPRISE("GITHUB_ENTERPRISE");

    public final String value;

    private ServerTypeEnum(String value) {
        this.value = value;
    }
}
