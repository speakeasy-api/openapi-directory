package openapisdk.models.shared;


public enum CrTypeEnum {
    EC2("EC2"),
    SPOT("SPOT"),
    FARGATE("FARGATE"),
    FARGATE_SPOT("FARGATE_SPOT");

    public final String value;

    private CrTypeEnum(String value) {
        this.value = value;
    }
}
