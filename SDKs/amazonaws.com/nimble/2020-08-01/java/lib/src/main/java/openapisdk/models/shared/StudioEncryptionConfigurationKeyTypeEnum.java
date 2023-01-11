package openapisdk.models.shared;


public enum StudioEncryptionConfigurationKeyTypeEnum {
    AWS_OWNED_KEY("AWS_OWNED_KEY"),
    CUSTOMER_MANAGED_KEY("CUSTOMER_MANAGED_KEY");

    public final String value;

    private StudioEncryptionConfigurationKeyTypeEnum(String value) {
        this.value = value;
    }
}
