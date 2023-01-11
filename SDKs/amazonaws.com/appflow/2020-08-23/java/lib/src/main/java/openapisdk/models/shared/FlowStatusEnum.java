package openapisdk.models.shared;


public enum FlowStatusEnum {
    ACTIVE("Active"),
    DEPRECATED("Deprecated"),
    DELETED("Deleted"),
    DRAFT("Draft"),
    ERRORED("Errored"),
    SUSPENDED("Suspended");

    public final String value;

    private FlowStatusEnum(String value) {
        this.value = value;
    }
}
