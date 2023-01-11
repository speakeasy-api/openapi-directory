package openapisdk.models.shared;


public enum SourceTypeEnum {
    NODE("node"),
    PARAMETER_GROUP("parameter-group"),
    SUBNET_GROUP("subnet-group"),
    CLUSTER("cluster"),
    USER("user"),
    ACL("acl");

    public final String value;

    private SourceTypeEnum(String value) {
        this.value = value;
    }
}
