package openapisdk.models.shared;


public enum TaskResponseResourceSubtypeEnum {
    DEFAULT_TASK("default_task"),
    MILESTONE("milestone"),
    SECTION("section"),
    APPROVAL("approval");

    public final String value;

    private TaskResponseResourceSubtypeEnum(String value) {
        this.value = value;
    }
}
