package openapisdk.models.shared;


public enum EncryptionOptionEnum {
    AWS_OWNED_CMK("AWS_OWNED_CMK"),
    CUSTOMER_MANAGED_CMK("CUSTOMER_MANAGED_CMK");

    public final String value;

    private EncryptionOptionEnum(String value) {
        this.value = value;
    }
}
