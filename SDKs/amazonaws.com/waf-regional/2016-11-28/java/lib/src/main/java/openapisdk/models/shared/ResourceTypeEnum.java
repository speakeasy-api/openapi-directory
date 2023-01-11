package openapisdk.models.shared;


public enum ResourceTypeEnum {
    APPLICATION_LOAD_BALANCER("APPLICATION_LOAD_BALANCER"),
    API_GATEWAY("API_GATEWAY");

    public final String value;

    private ResourceTypeEnum(String value) {
        this.value = value;
    }
}
