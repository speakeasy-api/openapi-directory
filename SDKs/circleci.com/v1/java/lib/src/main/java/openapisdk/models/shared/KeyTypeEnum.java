package openapisdk.models.shared;


public enum KeyTypeEnum {
    DEPLOY_KEY("deploy-key"),
    GITHUB_USER_KEY("github-user-key");

    public final String value;

    private KeyTypeEnum(String value) {
        this.value = value;
    }
}
