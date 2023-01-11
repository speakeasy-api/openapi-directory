package openapisdk.models.shared;


public enum DeploymentTypeEnum {
    IN_PLACE("IN_PLACE"),
    BLUE_GREEN("BLUE_GREEN");

    public final String value;

    private DeploymentTypeEnum(String value) {
        this.value = value;
    }
}
