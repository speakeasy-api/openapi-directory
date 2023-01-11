package openapisdk.models.shared;


public enum ProviderTypeEnum {
    BITBUCKET("Bitbucket"),
    GIT_HUB("GitHub"),
    GIT_HUB_ENTERPRISE_SERVER("GitHubEnterpriseServer");

    public final String value;

    private ProviderTypeEnum(String value) {
        this.value = value;
    }
}
