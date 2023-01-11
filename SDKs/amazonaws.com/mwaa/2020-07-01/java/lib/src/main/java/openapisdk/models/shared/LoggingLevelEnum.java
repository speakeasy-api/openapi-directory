package openapisdk.models.shared;


public enum LoggingLevelEnum {
    CRITICAL("CRITICAL"),
    ERROR("ERROR"),
    WARNING("WARNING"),
    INFO("INFO"),
    DEBUG("DEBUG");

    public final String value;

    private LoggingLevelEnum(String value) {
        this.value = value;
    }
}
