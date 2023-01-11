package openapisdk.models.shared;


public enum RecoveryOptionNameTypeEnum {
    VERIFIED_EMAIL("verified_email"),
    VERIFIED_PHONE_NUMBER("verified_phone_number"),
    ADMIN_ONLY("admin_only");

    public final String value;

    private RecoveryOptionNameTypeEnum(String value) {
        this.value = value;
    }
}
