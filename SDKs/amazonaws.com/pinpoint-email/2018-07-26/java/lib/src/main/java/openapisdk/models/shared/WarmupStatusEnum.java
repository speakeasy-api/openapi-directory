package openapisdk.models.shared;


public enum WarmupStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    DONE("DONE");

    public final String value;

    private WarmupStatusEnum(String value) {
        this.value = value;
    }
}
