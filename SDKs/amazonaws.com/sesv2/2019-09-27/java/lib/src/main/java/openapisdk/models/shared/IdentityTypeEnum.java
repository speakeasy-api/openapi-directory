package openapisdk.models.shared;


public enum IdentityTypeEnum {
    EMAIL_ADDRESS("EMAIL_ADDRESS"),
    DOMAIN("DOMAIN"),
    MANAGED_DOMAIN("MANAGED_DOMAIN");

    public final String value;

    private IdentityTypeEnum(String value) {
        this.value = value;
    }
}
