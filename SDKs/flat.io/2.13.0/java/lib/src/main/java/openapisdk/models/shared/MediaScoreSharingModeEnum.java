package openapisdk.models.shared;


public enum MediaScoreSharingModeEnum {
    READ("read"),
    WRITE("write"),
    COPY("copy"),
    PERFORMANCE("performance");

    public final String value;

    private MediaScoreSharingModeEnum(String value) {
        this.value = value;
    }
}
