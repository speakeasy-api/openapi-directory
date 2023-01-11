package openapisdk.models.shared;


public enum StateEnum {
    OFFLINE("OFFLINE"),
    ONLINE("ONLINE"),
    STARTING("STARTING"),
    STOPPING("STOPPING"),
    START_FAILED("START_FAILED"),
    STOP_FAILED("STOP_FAILED");

    public final String value;

    private StateEnum(String value) {
        this.value = value;
    }
}
