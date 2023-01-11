package openapisdk.models.shared;


public enum LogFilterEnum {
    ERROR("ERROR"),
    WARN("WARN"),
    INFO("INFO");

    public final String value;

    private LogFilterEnum(String value) {
        this.value = value;
    }
}
