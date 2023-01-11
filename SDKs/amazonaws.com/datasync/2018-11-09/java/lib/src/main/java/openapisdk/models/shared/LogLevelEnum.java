package openapisdk.models.shared;


public enum LogLevelEnum {
    OFF("OFF"),
    BASIC("BASIC"),
    TRANSFER("TRANSFER");

    public final String value;

    private LogLevelEnum(String value) {
        this.value = value;
    }
}
