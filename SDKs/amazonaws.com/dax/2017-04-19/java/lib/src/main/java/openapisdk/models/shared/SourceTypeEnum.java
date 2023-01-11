package openapisdk.models.shared;


public enum SourceTypeEnum {
    CLUSTER("CLUSTER"),
    PARAMETER_GROUP("PARAMETER_GROUP"),
    SUBNET_GROUP("SUBNET_GROUP");

    public final String value;

    private SourceTypeEnum(String value) {
        this.value = value;
    }
}
