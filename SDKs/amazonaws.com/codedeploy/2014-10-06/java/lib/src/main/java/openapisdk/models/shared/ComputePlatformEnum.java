package openapisdk.models.shared;


public enum ComputePlatformEnum {
    SERVER("Server"),
    LAMBDA("Lambda"),
    ECS("ECS");

    public final String value;

    private ComputePlatformEnum(String value) {
        this.value = value;
    }
}
