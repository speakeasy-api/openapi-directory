package openapisdk.models.shared;


public enum JobTypeEnum {
    RELEASE("RELEASE"),
    RETRY("RETRY"),
    MANUAL("MANUAL"),
    WEB_HOOK("WEB_HOOK");

    public final String value;

    private JobTypeEnum(String value) {
        this.value = value;
    }
}
