package openapisdk.models.shared;


public enum ApplicationVersionStatusEnum {
    PROCESSED("Processed"),
    UNPROCESSED("Unprocessed"),
    FAILED("Failed"),
    PROCESSING("Processing"),
    BUILDING("Building");

    public final String value;

    private ApplicationVersionStatusEnum(String value) {
        this.value = value;
    }
}
