package openapisdk.models.shared;


public enum ContainerServiceDeploymentStateEnum {
    ACTIVATING("ACTIVATING"),
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    FAILED("FAILED");

    public final String value;

    private ContainerServiceDeploymentStateEnum(String value) {
        this.value = value;
    }
}
