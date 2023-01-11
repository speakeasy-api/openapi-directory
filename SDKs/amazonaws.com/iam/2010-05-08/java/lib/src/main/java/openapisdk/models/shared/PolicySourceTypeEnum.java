package openapisdk.models.shared;


public enum PolicySourceTypeEnum {
    USER("user"),
    GROUP("group"),
    ROLE("role"),
    AWS_MANAGED("aws-managed"),
    USER_MANAGED("user-managed"),
    RESOURCE("resource"),
    NONE("none");

    public final String value;

    private PolicySourceTypeEnum(String value) {
        this.value = value;
    }
}
