package openapisdk.models.shared;


public enum UpdateStatusEnum {
    SUCCESS("SUCCESS"),
    PENDING("PENDING"),
    FAILED("FAILED");

    public final String value;

    private UpdateStatusEnum(String value) {
        this.value = value;
    }
}
