package openapisdk.models.shared;


public enum RobotStatusEnum {
    AVAILABLE("Available"),
    REGISTERED("Registered"),
    PENDING_NEW_DEPLOYMENT("PendingNewDeployment"),
    DEPLOYING("Deploying"),
    FAILED("Failed"),
    IN_SYNC("InSync"),
    NO_RESPONSE("NoResponse");

    public final String value;

    private RobotStatusEnum(String value) {
        this.value = value;
    }
}
