package openapisdk.models.operations;


public enum GetListEntitiesForPolicyEntityFilterEnum {
    USER("User"),
    ROLE("Role"),
    GROUP("Group"),
    LOCAL_MANAGED_POLICY("LocalManagedPolicy"),
    AWS_MANAGED_POLICY("AWSManagedPolicy");

    public final String value;

    private GetListEntitiesForPolicyEntityFilterEnum(String value) {
        this.value = value;
    }
}
