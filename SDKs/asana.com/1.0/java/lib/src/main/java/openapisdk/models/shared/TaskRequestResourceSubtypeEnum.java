package openapisdk.models.shared;


public enum TaskRequestResourceSubtypeEnum {
    DEFAULT_TASK("default_task"),
    MILESTONE("milestone"),
    SECTION("section"),
    APPROVAL("approval");

    public final String value;

    private TaskRequestResourceSubtypeEnum(String value) {
        this.value = value;
    }
}
