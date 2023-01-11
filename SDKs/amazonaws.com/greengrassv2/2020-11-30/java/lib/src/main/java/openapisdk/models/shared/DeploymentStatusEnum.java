package openapisdk.models.shared;


public enum DeploymentStatusEnum {
    ACTIVE("ACTIVE"),
    COMPLETED("COMPLETED"),
    CANCELED("CANCELED"),
    FAILED("FAILED"),
    INACTIVE("INACTIVE");

    public final String value;

    private DeploymentStatusEnum(String value) {
        this.value = value;
    }
}
