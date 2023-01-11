package openapisdk.models.shared;


public enum CompatibilityEnum {
    EC2("EC2"),
    FARGATE("FARGATE"),
    EXTERNAL("EXTERNAL");

    public final String value;

    private CompatibilityEnum(String value) {
        this.value = value;
    }
}
