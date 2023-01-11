package openapisdk.models.shared;


public enum LoggingLevelEnum {
    ERROR("ERROR"),
    INFO("INFO"),
    DEBUG("DEBUG");

    public final String value;

    private LoggingLevelEnum(String value) {
        this.value = value;
    }
}
