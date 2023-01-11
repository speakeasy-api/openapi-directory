package openapisdk.models.shared;


public enum LogTypeEnum {
    SERVER("server"),
    SCHEDULER("scheduler");

    public final String value;

    private LogTypeEnum(String value) {
        this.value = value;
    }
}
