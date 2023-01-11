package openapisdk.models.shared;


public enum DeploymentWaitTypeEnum {
    READY_WAIT("READY_WAIT"),
    TERMINATION_WAIT("TERMINATION_WAIT");

    public final String value;

    private DeploymentWaitTypeEnum(String value) {
        this.value = value;
    }
}
