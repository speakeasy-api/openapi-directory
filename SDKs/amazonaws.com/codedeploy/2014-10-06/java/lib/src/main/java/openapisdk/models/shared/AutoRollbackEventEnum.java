package openapisdk.models.shared;


public enum AutoRollbackEventEnum {
    DEPLOYMENT_FAILURE("DEPLOYMENT_FAILURE"),
    DEPLOYMENT_STOP_ON_ALARM("DEPLOYMENT_STOP_ON_ALARM"),
    DEPLOYMENT_STOP_ON_REQUEST("DEPLOYMENT_STOP_ON_REQUEST");

    public final String value;

    private AutoRollbackEventEnum(String value) {
        this.value = value;
    }
}
