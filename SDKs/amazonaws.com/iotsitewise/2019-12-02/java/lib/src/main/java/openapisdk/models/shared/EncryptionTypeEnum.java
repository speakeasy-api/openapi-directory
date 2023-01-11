package openapisdk.models.shared;


public enum EncryptionTypeEnum {
    SITEWISE_DEFAULT_ENCRYPTION("SITEWISE_DEFAULT_ENCRYPTION"),
    KMS_BASED_ENCRYPTION("KMS_BASED_ENCRYPTION");

    public final String value;

    private EncryptionTypeEnum(String value) {
        this.value = value;
    }
}
