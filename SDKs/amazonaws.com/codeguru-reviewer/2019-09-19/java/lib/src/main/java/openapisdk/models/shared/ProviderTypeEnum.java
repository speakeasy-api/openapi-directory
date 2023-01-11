package openapisdk.models.shared;


public enum ProviderTypeEnum {
    CODE_COMMIT("CodeCommit"),
    GIT_HUB("GitHub"),
    BITBUCKET("Bitbucket"),
    GIT_HUB_ENTERPRISE_SERVER("GitHubEnterpriseServer"),
    S3_BUCKET("S3Bucket");

    public final String value;

    private ProviderTypeEnum(String value) {
        this.value = value;
    }
}
