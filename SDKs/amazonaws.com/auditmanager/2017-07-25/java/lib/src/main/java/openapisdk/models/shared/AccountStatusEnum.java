package openapisdk.models.shared;


public enum AccountStatusEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    PENDING_ACTIVATION("PENDING_ACTIVATION");

    public final String value;

    private AccountStatusEnum(String value) {
        this.value = value;
    }
}
