package openapisdk.models.shared;


public enum TaskResponseAssigneeStatusEnum {
    TODAY("today"),
    UPCOMING("upcoming"),
    LATER("later"),
    NEW_("new"),
    INBOX("inbox");

    public final String value;

    private TaskResponseAssigneeStatusEnum(String value) {
        this.value = value;
    }
}
