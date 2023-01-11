package openapisdk.models.shared;


public enum CatalogEncryptionModeEnum {
    DISABLED("DISABLED"),
    SSE_KMS("SSE-KMS");

    public final String value;

    private CatalogEncryptionModeEnum(String value) {
        this.value = value;
    }
}
