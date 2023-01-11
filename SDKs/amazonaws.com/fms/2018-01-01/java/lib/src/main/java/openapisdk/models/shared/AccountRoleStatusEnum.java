package openapisdk.models.shared;


public enum AccountRoleStatusEnum {
    READY("READY"),
    CREATING("CREATING"),
    PENDING_DELETION("PENDING_DELETION"),
    DELETING("DELETING"),
    DELETED("DELETED");

    public final String value;

    private AccountRoleStatusEnum(String value) {
        this.value = value;
    }
}
