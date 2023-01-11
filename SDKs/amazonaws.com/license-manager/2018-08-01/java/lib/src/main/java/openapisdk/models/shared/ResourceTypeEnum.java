package openapisdk.models.shared;


public enum ResourceTypeEnum {
    EC2_INSTANCE("EC2_INSTANCE"),
    EC2_HOST("EC2_HOST"),
    EC2_AMI("EC2_AMI"),
    RDS("RDS"),
    SYSTEMS_MANAGER_MANAGED_INSTANCE("SYSTEMS_MANAGER_MANAGED_INSTANCE");

    public final String value;

    private ResourceTypeEnum(String value) {
        this.value = value;
    }
}
