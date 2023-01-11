package openapisdk.models.shared;


public enum StoreStatusEnum {
    ACTIVE("Active"),
    SYSTEM_BLOCKED("SystemBlocked"),
    USER_BLOCKED("UserBlocked");

    public final String value;

    private StoreStatusEnum(String value) {
        this.value = value;
    }
}
