package openapisdk.models.shared;


public enum TargetTypeEnum {
    RDS_INSTANCE("RDS_INSTANCE"),
    RDS_SERVERLESS_ENDPOINT("RDS_SERVERLESS_ENDPOINT"),
    TRACKED_CLUSTER("TRACKED_CLUSTER");

    public final String value;

    private TargetTypeEnum(String value) {
        this.value = value;
    }
}
