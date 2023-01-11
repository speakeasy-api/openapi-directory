package openapisdk.models.shared;


public enum ConflictHandlerTypeEnum {
    OPTIMISTIC_CONCURRENCY("OPTIMISTIC_CONCURRENCY"),
    LAMBDA("LAMBDA"),
    AUTOMERGE("AUTOMERGE"),
    NONE("NONE");

    public final String value;

    private ConflictHandlerTypeEnum(String value) {
        this.value = value;
    }
}
