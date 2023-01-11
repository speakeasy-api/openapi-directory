package openapisdk.models.shared;


public enum CloudWatchEventSourceEnum {
    EC2("EC2"),
    CODE_DEPLOY("CODE_DEPLOY"),
    HEALTH("HEALTH"),
    RDS("RDS");

    public final String value;

    private CloudWatchEventSourceEnum(String value) {
        this.value = value;
    }
}
