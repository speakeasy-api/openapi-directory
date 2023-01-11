package openapisdk.models.shared;


public enum LogLevelEnum {
    ALL("ALL"),
    ERROR("ERROR"),
    FATAL("FATAL"),
    OFF("OFF");

    public final String value;

    private LogLevelEnum(String value) {
        this.value = value;
    }
}
