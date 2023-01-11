package openapisdk.models.shared;


public enum SchemaStatusEnum {
    PROCESSING("PROCESSING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING"),
    FAILED("FAILED"),
    SUCCESS("SUCCESS"),
    NOT_APPLICABLE("NOT_APPLICABLE");

    public final String value;

    private SchemaStatusEnum(String value) {
        this.value = value;
    }
}
