package openapisdk.models.shared;


public enum ConfigurationDeploymentStatusEnum {
    DEPLOYED("deployed"),
    PENDING("pending"),
    FAILED("failed");

    public final String value;

    private ConfigurationDeploymentStatusEnum(String value) {
        this.value = value;
    }
}
