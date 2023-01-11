package openapisdk.models.shared;


public enum EndpointTypeEnum {
    PUBLIC_("PUBLIC"),
    VPC("VPC"),
    VPC_ENDPOINT("VPC_ENDPOINT");

    public final String value;

    private EndpointTypeEnum(String value) {
        this.value = value;
    }
}
