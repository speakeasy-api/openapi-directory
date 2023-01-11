package openapisdk.models.shared;


public enum PlatformCapabilityEnum {
    EC2("EC2"),
    FARGATE("FARGATE");

    public final String value;

    private PlatformCapabilityEnum(String value) {
        this.value = value;
    }
}
