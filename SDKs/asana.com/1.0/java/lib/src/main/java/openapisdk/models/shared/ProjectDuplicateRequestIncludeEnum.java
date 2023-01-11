package openapisdk.models.shared;


public enum ProjectDuplicateRequestIncludeEnum {
    MEMBERS("members"),
    NOTES("notes"),
    FORMS("forms"),
    TASK_NOTES("task_notes"),
    TASK_ASSIGNEE("task_assignee"),
    TASK_SUBTASKS("task_subtasks"),
    TASK_ATTACHMENTS("task_attachments"),
    TASK_DATES("task_dates"),
    TASK_DEPENDENCIES("task_dependencies"),
    TASK_FOLLOWERS("task_followers"),
    TASK_TAGS("task_tags"),
    TASK_PROJECTS("task_projects");

    public final String value;

    private ProjectDuplicateRequestIncludeEnum(String value) {
        this.value = value;
    }
}
