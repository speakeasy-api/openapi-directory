package openapisdk.models.operations;


public enum PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum {
    SITEWISE_DEFAULT_ENCRYPTION("SITEWISE_DEFAULT_ENCRYPTION"),
    KMS_BASED_ENCRYPTION("KMS_BASED_ENCRYPTION");

    public final String value;

    private PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum(String value) {
        this.value = value;
    }
}
