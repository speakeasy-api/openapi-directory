package openapisdk.models.shared;


public enum DeploymentUpdateTypeEnum {
    NONE("NONE"),
    CURRENT_VERSION("CURRENT_VERSION"),
    MINOR_VERSION("MINOR_VERSION"),
    MAJOR_VERSION("MAJOR_VERSION");

    public final String value;

    private DeploymentUpdateTypeEnum(String value) {
        this.value = value;
    }
}
