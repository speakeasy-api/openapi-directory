package openapisdk.models.shared;


public enum NamespaceDeletionStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private NamespaceDeletionStatusEnum(String value) {
        this.value = value;
    }
}
