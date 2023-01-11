package openapisdk.models.shared;


public enum FleetAttributeEnum {
    VPC_CONFIGURATION("VPC_CONFIGURATION"),
    VPC_CONFIGURATION_SECURITY_GROUP_IDS("VPC_CONFIGURATION_SECURITY_GROUP_IDS"),
    DOMAIN_JOIN_INFO("DOMAIN_JOIN_INFO"),
    IAM_ROLE_ARN("IAM_ROLE_ARN");

    public final String value;

    private FleetAttributeEnum(String value) {
        this.value = value;
    }
}
