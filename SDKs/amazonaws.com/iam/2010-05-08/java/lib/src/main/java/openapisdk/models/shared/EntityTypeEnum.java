package openapisdk.models.shared;


public enum EntityTypeEnum {
    USER("User"),
    ROLE("Role"),
    GROUP("Group"),
    LOCAL_MANAGED_POLICY("LocalManagedPolicy"),
    AWS_MANAGED_POLICY("AWSManagedPolicy");

    public final String value;

    private EntityTypeEnum(String value) {
        this.value = value;
    }
}
