package openapisdk.models.shared;


public enum ModelStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED");

    public final String value;

    private ModelStatusEnum(String value) {
        this.value = value;
    }
}
