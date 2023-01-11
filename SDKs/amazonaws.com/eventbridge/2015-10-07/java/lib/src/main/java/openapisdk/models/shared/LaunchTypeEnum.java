package openapisdk.models.shared;


public enum LaunchTypeEnum {
    EC2("EC2"),
    FARGATE("FARGATE"),
    EXTERNAL("EXTERNAL");

    public final String value;

    private LaunchTypeEnum(String value) {
        this.value = value;
    }
}
