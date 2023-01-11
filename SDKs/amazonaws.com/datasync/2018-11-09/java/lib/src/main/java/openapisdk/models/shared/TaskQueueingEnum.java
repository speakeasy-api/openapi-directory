package openapisdk.models.shared;


public enum TaskQueueingEnum {
    ENABLED("ENABLED"),
    DISABLED("DISABLED");

    public final String value;

    private TaskQueueingEnum(String value) {
        this.value = value;
    }
}
