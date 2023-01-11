package openapisdk.models.operations;


public enum StartJobRequestBodyJobTypeEnum {
    RELEASE("RELEASE"),
    RETRY("RETRY"),
    MANUAL("MANUAL"),
    WEB_HOOK("WEB_HOOK");

    public final String value;

    private StartJobRequestBodyJobTypeEnum(String value) {
        this.value = value;
    }
}
