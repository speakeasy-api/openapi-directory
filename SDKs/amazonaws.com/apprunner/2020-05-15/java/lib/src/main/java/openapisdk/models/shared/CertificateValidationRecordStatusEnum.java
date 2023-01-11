package openapisdk.models.shared;


public enum CertificateValidationRecordStatusEnum {
    PENDING_VALIDATION("PENDING_VALIDATION"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED");

    public final String value;

    private CertificateValidationRecordStatusEnum(String value) {
        this.value = value;
    }
}
