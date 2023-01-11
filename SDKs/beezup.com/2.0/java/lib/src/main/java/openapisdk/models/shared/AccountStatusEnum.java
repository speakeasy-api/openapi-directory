package openapisdk.models.shared;


public enum AccountStatusEnum {
    ACTIVE("Active"),
    SYSTEM_BLOCKED("SystemBlocked"),
    USER_BLOCKED("UserBlocked"),
    NOT_ACTIVATED("NotActivated");

    public final String value;

    private AccountStatusEnum(String value) {
        this.value = value;
    }
}
