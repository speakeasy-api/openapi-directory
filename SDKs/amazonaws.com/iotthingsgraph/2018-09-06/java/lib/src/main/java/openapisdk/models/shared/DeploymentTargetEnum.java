package openapisdk.models.shared;


public enum DeploymentTargetEnum {
    GREENGRASS("GREENGRASS"),
    CLOUD("CLOUD");

    public final String value;

    private DeploymentTargetEnum(String value) {
        this.value = value;
    }
}
