package openapisdk.models.shared;


public enum NetworkModeEnum {
    BRIDGE("bridge"),
    HOST("host"),
    AWSVPC("awsvpc"),
    NONE("none");

    public final String value;

    private NetworkModeEnum(String value) {
        this.value = value;
    }
}
