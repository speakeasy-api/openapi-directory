package openapisdk.models.shared;


public enum AssignmentStateEnum {
    DRAFT("draft"),
    ACTIVE("active"),
    ARCHIVED("archived");

    public final String value;

    private AssignmentStateEnum(String value) {
        this.value = value;
    }
}
