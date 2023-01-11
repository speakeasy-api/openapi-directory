package openapisdk.models.shared;


public enum SourceAccessTypeEnum {
    BASIC_AUTH("BASIC_AUTH"),
    VPC_SUBNET("VPC_SUBNET"),
    VPC_SECURITY_GROUP("VPC_SECURITY_GROUP"),
    SASL_SCRAM512_AUTH("SASL_SCRAM_512_AUTH"),
    SASL_SCRAM256_AUTH("SASL_SCRAM_256_AUTH"),
    VIRTUAL_HOST("VIRTUAL_HOST");

    public final String value;

    private SourceAccessTypeEnum(String value) {
        this.value = value;
    }
}
