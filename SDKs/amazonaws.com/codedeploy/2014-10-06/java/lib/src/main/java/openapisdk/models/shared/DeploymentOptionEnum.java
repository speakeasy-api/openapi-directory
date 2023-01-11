package openapisdk.models.shared;


public enum DeploymentOptionEnum {
    WITH_TRAFFIC_CONTROL("WITH_TRAFFIC_CONTROL"),
    WITHOUT_TRAFFIC_CONTROL("WITHOUT_TRAFFIC_CONTROL");

    public final String value;

    private DeploymentOptionEnum(String value) {
        this.value = value;
    }
}
