package openapisdk.models.shared;


public enum SystemInstanceDeploymentStatusEnum {
    NOT_DEPLOYED("NOT_DEPLOYED"),
    BOOTSTRAP("BOOTSTRAP"),
    DEPLOY_IN_PROGRESS("DEPLOY_IN_PROGRESS"),
    DEPLOYED_IN_TARGET("DEPLOYED_IN_TARGET"),
    UNDEPLOY_IN_PROGRESS("UNDEPLOY_IN_PROGRESS"),
    FAILED("FAILED"),
    PENDING_DELETE("PENDING_DELETE"),
    DELETED_IN_TARGET("DELETED_IN_TARGET");

    public final String value;

    private SystemInstanceDeploymentStatusEnum(String value) {
        this.value = value;
    }
}
