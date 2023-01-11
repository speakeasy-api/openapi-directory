package openapisdk.models.shared;


public enum ModelStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    FAILED("FAILED"),
    COMPLETED("COMPLETED");

    public final String value;

    private ModelStatusEnum(String value) {
        this.value = value;
    }
}
