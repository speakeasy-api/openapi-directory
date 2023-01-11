package openapisdk.models.shared;


public enum LogTypeEnum {
    API("api"),
    AUDIT("audit"),
    AUTHENTICATOR("authenticator"),
    CONTROLLER_MANAGER("controllerManager"),
    SCHEDULER("scheduler");

    public final String value;

    private LogTypeEnum(String value) {
        this.value = value;
    }
}
