package openapisdk.models.shared;


public enum DataShareStatusEnum {
    ACTIVE("ACTIVE"),
    PENDING_AUTHORIZATION("PENDING_AUTHORIZATION"),
    AUTHORIZED("AUTHORIZED"),
    DEAUTHORIZED("DEAUTHORIZED"),
    REJECTED("REJECTED"),
    AVAILABLE("AVAILABLE");

    public final String value;

    private DataShareStatusEnum(String value) {
        this.value = value;
    }
}
