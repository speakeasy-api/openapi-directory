package openapisdk.models.shared;


public enum TaskRequestAssigneeStatusEnum {
    TODAY("today"),
    UPCOMING("upcoming"),
    LATER("later"),
    NEW_("new"),
    INBOX("inbox");

    public final String value;

    private TaskRequestAssigneeStatusEnum(String value) {
        this.value = value;
    }
}
