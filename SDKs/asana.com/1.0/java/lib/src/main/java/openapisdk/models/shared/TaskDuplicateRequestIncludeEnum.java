package openapisdk.models.shared;


public enum TaskDuplicateRequestIncludeEnum {
    NOTES("notes"),
    ASSIGNEE("assignee"),
    SUBTASKS("subtasks"),
    ATTACHMENTS("attachments"),
    TAGS("tags"),
    FOLLOWERS("followers"),
    PROJECTS("projects"),
    DATES("dates"),
    DEPENDENCIES("dependencies"),
    PARENT("parent");

    public final String value;

    private TaskDuplicateRequestIncludeEnum(String value) {
        this.value = value;
    }
}
