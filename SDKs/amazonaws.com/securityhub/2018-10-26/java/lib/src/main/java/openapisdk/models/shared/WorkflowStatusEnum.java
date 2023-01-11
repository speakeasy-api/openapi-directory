package openapisdk.models.shared;


public enum WorkflowStatusEnum {
    NEW_("NEW"),
    NOTIFIED("NOTIFIED"),
    RESOLVED("RESOLVED"),
    SUPPRESSED("SUPPRESSED");

    public final String value;

    private WorkflowStatusEnum(String value) {
        this.value = value;
    }
}
