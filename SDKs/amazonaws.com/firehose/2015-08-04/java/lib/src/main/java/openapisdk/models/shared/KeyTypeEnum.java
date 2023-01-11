package openapisdk.models.shared;


public enum KeyTypeEnum {
    AWS_OWNED_CMK("AWS_OWNED_CMK"),
    CUSTOMER_MANAGED_CMK("CUSTOMER_MANAGED_CMK");

    public final String value;

    private KeyTypeEnum(String value) {
        this.value = value;
    }
}
