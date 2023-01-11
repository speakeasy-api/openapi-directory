package openapisdk.models.shared;


public enum EventSeverityEnum {
    TRACE("TRACE"),
    DEBUG("DEBUG"),
    INFO("INFO"),
    WARN("WARN"),
    ERROR("ERROR"),
    FATAL("FATAL");

    public final String value;

    private EventSeverityEnum(String value) {
        this.value = value;
    }
}
