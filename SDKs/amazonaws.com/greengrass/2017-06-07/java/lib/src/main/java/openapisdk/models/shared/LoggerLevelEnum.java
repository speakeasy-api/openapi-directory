package openapisdk.models.shared;


public enum LoggerLevelEnum {
    DEBUG("DEBUG"),
    INFO("INFO"),
    WARN("WARN"),
    ERROR("ERROR"),
    FATAL("FATAL");

    public final String value;

    private LoggerLevelEnum(String value) {
        this.value = value;
    }
}
